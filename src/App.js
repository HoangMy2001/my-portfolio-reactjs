import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      
      {/* Section demo */}
      <section id="about" className="container" style={{ paddingTop: "80px" }}>
        <h2>Giới thiệu</h2>
        <p>Đây là phần giới thiệu bản thân...</p>
      </section>

      <section id="projects" className="container">
        <h2>Dự án</h2>
        <p>Danh sách các dự án...</p>
      </section>

      <section id="skills" className="container">
        <h2>Kỹ năng</h2>
        <p>ReactJS, JavaScript, CSS, UX/UI...</p>
      </section>

      <section id="contact" className="container">
        <h2>Liên hệ</h2>
        <p>Email: example@gmail.com</p>
      </section>
    </>
  );
}

export default App;
