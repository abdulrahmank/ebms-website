<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="custom-container">
        <div class="foot-container">
          <div class="footer-wrap">
            <h4 class="footer-head">DIGITAL SOLUTIONS</h4>
            <div class="menu-block">
              <div class="footer-menu">
                <h5>SHIPPING</h5>
                <ul class="footer-list">
                  <li>
                    <NuxtLink to="/shipping/container-line">Liner</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shipping/feeder">Feeder</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shipping/agency-house">Agency House</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shipping/nvocc">NVOCC</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shipping/ship-agency">Ship Agency</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shipping/special-purpose">Special Purpose Solutions</NuxtLink>
                  </li>
                </ul>
              </div>

              <div class="footer-menu">
                <h5>LOGISTICS</h5>
                <ul class="footer-list">
                  <li>
                    <NuxtLink to="/logistics/global-freight">Global Forwarding</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/logistics/transport">Transport</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/logistics/container-yard">Container Yard</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/shipping/warehouse">Warehouse / 3PL</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-wrap">
            <h4 class="footer-head">DIGITAL TECHNOLOGY</h4>
            <div class="menu-block">
              <div class="footer-menu">
                <h5>DIGITAL TRANSFORMATION</h5>
                <ul class="footer-list">
                  <li>
                    <NuxtLink to="/customer-portal">Customer Experience Solution - YEP!!</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/ai">AI</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/rpa">RPA</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/wfh">WFH</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/iot">IOT</NuxtLink>
                  </li>
                </ul>
              </div>

              <div class="footer-menu">
                <h5>EFFICIENCY / PRODUCTIVITY</h5>
                <ul class="footer-list">
                  <li>
                    <NuxtLink to="/mobile">Mobile</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/api-edi">API/EDI</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/e2e-dashboard">E2E Dashboard</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-menu footer-block">
            <h4 class="footer-head">ABOUT US</h4>
            <ul class="footer-list">
              <li>
                <NuxtLink to="/company">Company</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/journey">Our Journey</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/why-ebms">Why eBMS</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/teams">Our Team</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/csr">CSR</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer-menu footer-block lite">
            <ul class="footer-list">
              <li>
                <NuxtLink to="/careers">CAREERS</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/partners">PARTNERS</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/customers">CUSTOMERS</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact">CONTACT US</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/demo">BOOK A DEMO</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-container">
      <div class="footer-bottom">
        <div class="copyright">
          © {{ new Date().getFullYear() }} eBMS All Rights Reserved <span class="divider">|</span>
          <NuxtLink to="/privacy">Privacy Statement</NuxtLink>
        </div>

        <div class="locations">
          <ul class="location-list">
            <li>
              <span class="flag">
                <img alt="Flag" src="/images/icons/Flag-India.png">
              </span>
              CHENNAI
            </li>
            <li>
              <span class="flag">
                <img alt="Flag" src="/images/icons/Flag-India.png">
              </span>
              MUMBAI
            </li>
            <li>
              <span class="flag">
                <img alt="Flag" src="/images/icons/Flag-Dubai.png">
              </span>
              DUBAI
            </li>
          </ul>
        </div>

        <div class="social-icons">
          <ul class="social-list">
            <li>
              <a href="https://www.facebook.com/eBMSSolutionsPvtLtd/" target="_blank">
                <img alt="Facebook" src="/images/icons/facebook.svg">
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/ebms/" target="_blank">
                <img alt="LinkedIn" src="/images/icons/linkedin.svg">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #fff;
  padding-top: 3rem;
}

.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.foot-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-wrap {
  flex: 1;
  min-width: 250px;
}

.footer-head {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.menu-block {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-menu {
  min-width: 200px;
}

.footer-menu h5 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ecf0f1;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 0.5rem;
}

.footer-list a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.9rem;
}

.footer-list a:hover {
  color: #fff;
}

.footer-block {
  flex: 0 0 200px;
}

.footer-block.lite ul {
  margin-top: 3.75rem;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 1rem;
}

.copyright {
  font-size: 0.85rem;
  color: #bdc3c7;
}

.divider {
  margin: 0 0.5rem;
}

.copyright a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.copyright a:hover {
  color: #fff;
}

.locations {
  display: flex;
  align-items: center;
}

.location-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.location-list li {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #bdc3c7;
}

.flag {
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}

.flag img {
  width: 16px;
  height: auto;
}

.social-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
}

.social-list li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s;
}

.social-list li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.social-list li a img {
  width: 16px;
  height: 16px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .foot-container {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-wrap {
    width: 100%;
  }

  .footer-block.lite ul {
    margin-top: 0;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .location-list {
    margin-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .social-icons {
    margin-top: 1rem;
  }
}
</style>
