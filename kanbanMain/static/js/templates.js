// get csrf token
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');

// popup for adding new task
export let newTaskPopup = `
  <h1>Add New Task</h1>
  <form action='addNewTask' method='post'>
    <input type="hidden" id="csrfToken" name="csrfmiddlewaretoken" value="${csrftoken}">
    <input type='text' name='test'>
    <button>Submit</button>
  </form>`

