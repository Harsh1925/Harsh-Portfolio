import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Lets work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>harshmodi134@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Hello street New York </span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+1 551 260 8493</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
