function tasksItemComponent(task) {
  // You are going to add your HTML design here.
  // Do the option design in HTML page, test it, and replace it if you need instead of this code.
  // For any variables, just use the interpolation operation ${} and pass the variable
  const checked = task.done ? "checked" : "";
  return `
              <div class="todo-item card mt-1">
              <div class="card-header">
              ${task.category}
              </div>
              <div class="card-body">
              <div class="row">
              <div class="col-1">
              <input 
              class="task-checkbox" 
              type="checkbox"
              ${checked} 
              onchange="taskChecked(${task.id}, this.checked)"
            />
              </div>
              <div class="col-11">
              <div className="movie-details">
                  <p class="item-title">${task.title}</p>
                </div>
              </div>

              </div>
              </div>
                
              </div>
      `;
}
