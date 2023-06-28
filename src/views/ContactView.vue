<template>
  <div class="contact">
    <h2 class="heading01">Contact Us</h2>
    <br />
    <div class="row">
      <div class="col-6">
        <br />

        <b>
          <p class="ra2 fs-6">C_Krepts@gmail.com</p>
          <br />
          <br />
          <p class="ra2 fs-6">Tel No: 021 555 8888</p>
          <br />
          <br />
          <p class="ra2 fs-6">9010 Ackerman Ave, 5430</p>
          <br />
          <br />
          <p class="ra2 fs-6">xxxx xxxx xxxx</p>
        </b>
      </div>
      <div class="col-6">
        <form action="https://formspree.io/f/{form_id}" method="post">
          <label for="First Name">First Name</label>
          <br />
          <input type="text" class="input" placeholder="Enter First Name" />
          <br />
          <br />
          <label for="">Last Name</label>
          <br />
          <input type="text" class="input" placeholder="Enter Last Name" />
          <br />
          <br />
          <label for="email">Email Account</label>
          <br />
          <input
            name="Email"
            id="email"
            type="email"
            class="input"
            placeholder="example@gmail.com"
          />
          <br />
          <br />
          <label for="">Leave Us a Message</label>
          <br />
          <input type="text" class="inputmess" />
          <br />
          <br />
          <button type="submit" class="btn1">Send</button>
          <br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ContactComp from "../components/Contact-comp.vue";

export default {
  components: { ContactComp },
};
</script>

<style scoped>
.heading01 {
  color: rgb(255, 255, 255);
}
.btn1 {
  position: relative;
  font-size: 17px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.1em 1.5em;
  display: inline-block;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
  font-weight: 900;
  color: black;
  background-color: white;
}

.btn1:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgb(255, 0, 0);
}

.btn1:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgb(255, 0, 0);
}

.btn1::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn1::after {
  background-color: #fff;
}

.btn1:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
.input {
    border-radius: 1rem;
    width: 16rem;
    height: 2.6rem;
}

.inputmess {
    border-radius: 1rem;
    height: 8rem;
    width: 16rem;
    text-align: start;
    font-size: 1rem;
}
.ra2 {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
}
.ra2:hover {
  transform: scale(1.4);
}
</style>
