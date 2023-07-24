export default function Contact() {
  return (
    <section id="contact">
      <form action="">
        <h2>CONTACT ME</h2>
        <label>Name</label>
        <input type="text" />

        <label>Subject</label>
        <input type="text" />

        <label>Subject</label>
        <textarea name="" id="" cols={30} rows={10}></textarea>

        <input type="submit" value="Enviar" />
      </form>
      <div className="social-networks">
        <a href="">Twitter</a>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
      </div>
    </section>
  );
}
