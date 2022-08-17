import Page from './page.js';

class ContactPage extends Page {
  constructor(section) {
    super(section);
    this.section = section;
    this.section.classList.add('container');
    this.section.classList.add('contact-us');
    this.section.innerHTML = `
      <div class="title">
        <h2>Contact Information</h2>
        <div class="underline"></div>
      </div>
      <div class="contact-info">
          <p>
              Do you have any questions or you just want to say "Hello"?
              <br>You can reach out to us!
          </p>
          <ul class="contact-list">
              <li>My e-mail: ziiikoooo2000@gmail.com</li>
              <li>My phone number: +967-773-038-525</li>
              <li>My address: Berlin Street, Sana'a City, Yemen.</li>
          </ul>
      </div>`;
  }
}

export default ContactPage;