//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     btns.forEach((item) => {
//       if (item !== btn) {
//         item.classList.remove("show-text");
//         console.log(item);
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });
