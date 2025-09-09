
// const courses = document.querySelectorAll(".course");
// const courseImage = document.getElementById("courseImage");
// const bar = document.querySelector(".bar");

// courses.forEach(course => {
//   course.addEventListener("mouseenter", () => {
//     const newImage = course.getAttribute("data-image");
//     courseImage.src = newImage;

//     // 🔄 Restart image animation
//     courseImage.classList.remove("animate");
//     void courseImage.offsetWidth; // reflow
//     courseImage.classList.add("animate");

//     // 🔄 Restart bar animation
//     bar.classList.remove("animate");
//     void bar.offsetWidth; // reflow
//     bar.classList.add("animate");
//   });
// });


const courses = document.querySelectorAll(".course");
const courseImage = document.getElementById("courseImage");
const bar = document.querySelector(".bar");

courses.forEach(course => {
  course.addEventListener("mouseenter", () => {
    const newImage = course.getAttribute("data-image");
    courseImage.src = newImage;

    // restart image animation
    courseImage.classList.remove("animate");
    void courseImage.offsetWidth; // reflow
    courseImage.classList.add("animate");

    // restart bar animation
    bar.classList.remove("animate");
    void bar.offsetWidth;
    bar.classList.add("animate");
  });
});

