import { HISTORY, DELETE_HISTORY, DELETE_ALL_HISTORY } from '../actions/history';

const initialState = {
    history: {
      isRequesting: false,
      isDeleting: false,
      messageDelete: '',
      data: []
    }
  }
const history = (state = initialState, action) => {
    switch(action.type) {
      case HISTORY.REQUEST: 
        return {...state, 
          history: {
            ...state.history,
            isRequesting: true,
            // data: []
          }
        }
      
      case HISTORY.SUCCESS: 
        return {...state,
          history: {
            isRequesting: false,
            data: action.data
          }
        }

      case HISTORY.FAIL: 
      break;

      case DELETE_HISTORY.REQUEST: 
        return {...state,
          isDeleting: true
        }
        
        case DELETE_HISTORY.SUCCESS: 
        return {...state,
          isDeleting: false
        }

        case DELETE_HISTORY.FAIL: 
        return {...state,
          history: {
            data: [...state.history.data],
            isDeleting: false,
            messageDelete: action.data
          }
        }

        
      case DELETE_ALL_HISTORY.REQUEST: 
      console.log("action", action)
      return {...state,
        isDeleting: true
      }
      
      case DELETE_ALL_HISTORY.SUCCESS: 
      console.log("action", action)
      return {...state,
        isDeleting: false
      }

      case DELETE_ALL_HISTORY.FAIL: 
      return {...state,
        history: {
          data: [...state.history.data],
          isDeleting: false,
          messageDelete: action.data
        }
      }
      default:
        return state;
    }
}

export default history;