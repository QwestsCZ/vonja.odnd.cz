
const examples = {
  basics: '(defun hello-world ()\n  (print "Hello, World!"))',
  functions: '(defun add-numbers (a b)\n  (+ a b))',
  lists: '(setq my-list \'(1 2 3 4 5))\n(car my-list)'
};

function checkCode() {
  const code = document.getElementById('code-input').value.toLowerCase();
  const feedback = document.getElementById('feedback');
  
  if (code.includes('defun') && code.includes('print')) {
    feedback.style.backgroundColor = '#dff0d8';
    feedback.style.color = '#3c763d';
    feedback.textContent = 'Good job! Your code contains basic Lisp syntax!';
  } else if (code.includes('setq') && (code.includes('car') || code.includes('cdr'))) {
    feedback.style.backgroundColor = '#dff0d8';
    feedback.style.color = '#3c763d';
    feedback.textContent = 'Great work with lists!';
  } else if (code.includes('defun') && (code.includes('+') || code.includes('*'))) {
    feedback.style.backgroundColor = '#dff0d8';
    feedback.style.color = '#3c763d';
    feedback.textContent = 'Excellent function definition!';
  } else {
    feedback.style.backgroundColor = '#f2dede';
    feedback.style.color = '#a94442';
    feedback.textContent = 'Try using Lisp syntax patterns shown in the examples above!';
  }
}

// Handle smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
