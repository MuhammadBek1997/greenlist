import '../styles/Footer.css'

const Footer = () => {

  return(
  <div class="container">
    <h1>
      Sign up to <br/>
      <span>Greenlist</span> today.
    </h1>

    <a href="#" class="slack-btn">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
        alt="Slack"
        class="slack-icon"
      />
      Connect to Slack
    </a>

    <p class="trial-text">
      Free 14 days trial, no credit card required.
    </p>
  </div>

)

}

export default Footer