import { HISTORY, DELETE_HISTORY, DELETE_ALL_HISTORY } from '../actions/history';
import { takeEvery, put, all, fork } from 'redux-saga/effects';
import axios from 'axios'


function* getHistories(id) {
    const result = yield axios.get('/history').then((response) => {
        return response
    })
    .catch(function (error) {
        console.log(error)
    })
    // success
    if(result.status === 200) {
        //process data
        let history = [
            {title: 'Today', data: []},
            {title: 'Yesterday', data: []},
            {title: 'This week', data: []},
            {title: 'Older than history week list', data: []}
        ]
        let todayList = [];
        let yesterdayList = [];
        let thisWeekList = [];
        let olderThanAWeekList = [];
        let today = new Date();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
        let yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0, 0, 0, 0);
        let thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - ((today.getDay() + 6) % 7), 0, 0, 0, 0);

        result.data.map((historyItem, index) => {
            let requestDate = new Date(historyItem.time);
            if (requestDate >= today) {
                todayList.push(historyItem);
            } else if (requestDate >= yesterday) {
                yesterdayList.push(historyItem);
            }
            if (requestDate >= thisWeek) {
                thisWeekList.push(historyItem);
            } else {
                olderThanAWeekList.push(historyItem);
            }
        })
        history[0].data = todayList
        history[1].data = yesterdayList
        history[2].data = thisWeekList
        history[3].data = olderThanAWeekList
    
    yield put({
        type: HISTORY.SUCCESS,
        data: history
    })
}
  else {
    //  fail
    yield put({
        type: HISTORY.FAIL,
        data: result.data
    })
  }
}

function* deleteHistory(obj) {
    const result = yield axios.delete(`/history/${obj.id}`)
    .then((response) => {
        return response
    })
    .catch(function (error) {
        return error
    })
    // success
    if(result.status === 200) {
        yield put({
            type: DELETE_HISTORY.SUCCESS,
            data: result
        })
        yield put({
            type: HISTORY.REQUEST
          });
    } else {
        //  fail
        yield put({
            type: DELETE_HISTORY.FAIL,
            data: result.message
        })
    }
}

function* deleteAllHistory(obj) {
    // console.log("obj", obj)
    yield obj.ids.map((item) => {
        console.log("item", item)
        fork(deleteHistory, {"id": item})
    })
}

export function* watchHistory() {
    yield takeEvery(HISTORY.REQUEST, getHistories);
    yield takeEvery(DELETE_HISTORY.REQUEST, deleteHistory);
    yield takeEvery(DELETE_ALL_HISTORY.REQUEST, deleteAllHistory);
}