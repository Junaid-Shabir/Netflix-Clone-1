import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <p class="footer-title">Questions? Call +923159530009</p>
          <div class="row">
            <div class="col-6 col-md-3">
              <ul class="list-unstyled">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Speed Test</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <ul class="list-unstyled">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <ul class="list-unstyled">
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Ways to Watch</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Only on Netflix</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <ul class="list-unstyled">
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-4">
            <button class="btn btn-outline-secondary btn-sm">English</button>
          </div>
          <p class="mt-3">&copy; 2024 Netflix, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
