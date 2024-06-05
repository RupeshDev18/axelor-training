import React from "react";

function Contact() {
  return (
    <div class="contact-container">
      <div id="contact">
        <h3>contact</h3>
        <form method="post">
          <div class="container">
            <div class="left">
              <label for="name">name</label>
              <input type="text" placeholder="john" id="name" />
              <label for="email">email</label>
              <input type="email" placeholder="abc@gmail.com" id="email" />
              <label for="phone">phone</label>
              <input type="number" placeholder="6568982321" id="phone" />
            </div>
            <div class="right">
              <label for="desc">description</label>
              <textarea
                name=""
                id="desc"
                cols="30"
                placeholder="describe shortly about yourself"
                rows="10"
              ></textarea>
            </div>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
