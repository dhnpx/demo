function formSubmit (e) {
    e.preventDefault();
    let list = document.getElementById("activity-list");

    let button = document.createElement('button');
    button.textContent = 'Upvote';
    button.addEventListener('click', () => { 
        li.attributes['data-count'].value = parseInt(li.getAttribute('data-count')) + 1;
        li.innerHTML = li.getAttribute('data-name') + ' ' + li.getAttribute('data-count') + ' ';
        li.append(button);
    });

    let li = document.createElement("li");
    li.setAttribute('data-count', 1);
    li.setAttribute('data-name', e.target[0].value);
    li.innerHTML = li.getAttribute('data-name') + ' ' + li.getAttribute('data-count') + ' ';
    li.append(button);

    list.appendChild(li);
    e.target[0].value = '';
}



document.getElementById('activity-form').addEventListener('submit', formSubmit);
