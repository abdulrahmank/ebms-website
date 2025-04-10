<template>
  <header class="site-header">
    <div class="custom-container">
      <nav class="navbar">
        <NuxtLink class="navbar-brand" to="/">
          <img alt="eBMS" src="/images/Logo.png">
        </NuxtLink>

        <button class="navbar-toggler" @click="toggleNavbar" :class="{ 'active': isNavOpen }">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse" :class="{ 'show': isNavOpen }">
          <ul class="navbar-nav">
            <li class="nav-item dropdown" @click="toggleDropdown('digital-solutions')" :class="{ 'active': activeDropdown === 'digital-solutions' }">
              <span class="nav-link">Digital Solutions</span>
              <div class="dropdown-content" :class="{ 'show': activeDropdown === 'digital-solutions' }">
                <div class="mega-menu">
                  <div class="menu-block">
                    <h5>SHIPPING</h5>
                    <div class="card-wrap">
                      <div class="menu-card">
                        <NuxtLink to="/shipping/container-line">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Container" src="/images/icons/Container.svg">
                            </div>
                            <p>Liner</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/shipping/feeder">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Feeder" src="/images/icons/Feeder.svg">
                            </div>
                            <p>Feeder</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/shipping/agency-house">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Agency House" src="/images/icons/Agency_house.svg">
                            </div>
                            <p>Agency House</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/shipping/nvocc">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="NVOCC Solution" src="/images/icons/NVOCC.svg">
                            </div>
                            <p>NVOCC Solution</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/shipping/ship-agency">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Ship Agency" src="/images/icons/ship_agency.svg">
                            </div>
                            <p>Ship Agency</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/shipping/special-purpose">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Special Purpose" src="/images/icons/Agency_house.svg">
                            </div>
                            <p>Special Purpose Solutions</p>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="menu-block">
                    <h5>LOGISTICS</h5>
                    <div class="card-wrap">
                      <div class="menu-card">
                        <NuxtLink to="/logistics/global-freight">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Global Freight" src="/images/icons/Global_freight.svg">
                            </div>
                            <p>Global Forwarding</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/logistics/transport">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Transport" src="/images/icons/Transport.svg">
                            </div>
                            <p>Transport Solution</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/logistics/container-yard">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Container Yard" src="/images/icons/yard.svg">
                            </div>
                            <p>Container Yard</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/shipping/warehouse">
                          <div class="menu-item">
                            <div class="menu-img">
                              <img alt="Warehouse" src="/images/icons/Warehouse.svg">
                            </div>
                            <p>Warehouse / 3PL Solution</p>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="menu-block">
                    <h5>ADD ON SOLUTIONS</h5>
                    <div class="addon-wrap">
                      <ul class="addon-list">
                        <li>
                          <NuxtLink to="/account-solution">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            Accounts Solution
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/esales-dialogue">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            eSales Dialogue
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/ecollection">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            eCollection
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/emaintenance">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            eMaintenance & Repairs
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/edi-generator">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            EDI Generator
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/epod">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            ePOD
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/eclaims">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            eClaims
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/edocumentation">
                            <span><img alt="" src="/images/icons/bullets.svg"></span>
                            eDocumentation
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown" @click="toggleDropdown('digital-technology')" :class="{ 'active': activeDropdown === 'digital-technology' }">
              <span class="nav-link">Digital Technology</span>
              <div class="dropdown-content" :class="{ 'show': activeDropdown === 'digital-technology' }">
                <div class="mega-menu">
                  <div class="menu-block">
                    <h5>DIGITAL SOLUTIONS</h5>
                    <div class="card-wrap">
                      <div class="menu-card">
                        <NuxtLink to="/customer-portal">
                          <div class="menu-item">
                            <p>Customer Experience Solution - YEP!!</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/ai">
                          <div class="menu-item">
                            <p>AI</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/rpa">
                          <div class="menu-item">
                            <p>RPA</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/wfh">
                          <div class="menu-item">
                            <p>WFH</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/iot">
                          <div class="menu-item">
                            <p>IOT</p>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="menu-block">
                    <h5>EFFICIENCY / PRODUCTIVITY</h5>
                    <div class="card-wrap">
                      <div class="menu-card">
                        <NuxtLink to="/mobile">
                          <div class="menu-item">
                            <p>Mobile</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/api-edi">
                          <div class="menu-item">
                            <p>API/EDI</p>
                          </div>
                        </NuxtLink>
                      </div>

                      <div class="menu-card">
                        <NuxtLink to="/e2e-dashboard">
                          <div class="menu-item">
                            <p>E2E Dashboard</p>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li class="nav-item dropdown" @click="toggleDropdown('p2idt')" :class="{ 'active': activeDropdown === 'p2idt' }">
              <span class="nav-link">P2iDT</span>
              <div class="dropdown-content simple-dropdown" :class="{ 'show': activeDropdown === 'p2idt' }">
                <ul class="dropdown-menu">
                  <li>
                    <a href="https://ebms.co.in/p2ia.php" target="_blank">Consulting</a>
                  </li>
                  <li>
                    <NuxtLink to="/implementation-services">Implementation Services</NuxtLink>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" to="/partners">Partners</NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" to="/careers">Careers</NuxtLink>
            </li>

            <li class="nav-item dropdown" @click="toggleDropdown('about-us')" :class="{ 'active': activeDropdown === 'about-us' }">
              <span class="nav-link">About Us</span>
              <div class="dropdown-content simple-dropdown" :class="{ 'show': activeDropdown === 'about-us' }">
                <ul class="dropdown-menu">
                  <li><NuxtLink to="/company">Company</NuxtLink></li>
                  <li><NuxtLink to="/journey">Our Journey</NuxtLink></li>
                  <li><NuxtLink to="/why-ebms">Why eBMS</NuxtLink></li>
                  <li><NuxtLink to="/teams">Our Team</NuxtLink></li>
                  <li><NuxtLink to="/csr">CSR</NuxtLink></li>
                </ul>
              </div>
            </li>
          </ul>

          <ul class="right-menu">
            <li class="nav-item mobile-no">
              <a class="nav-link" target="_blank" href="tel:+919884000676">
                <span><img alt="Call" src="/images/icons/phone.png"></span>
                +91 9884000676
              </a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link menu-demo-btn" to="/demo">REQUEST DEMO</NuxtLink>
            </li>
            <li class="nav-item whatsapp">
              <a class="nav-link" target="_blank" href="https://wa.me/+919884000676">
                <img alt="WhatsApp" src="/images/icons/whatsapp.svg">
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const isNavOpen = ref(false)
const activeDropdown = ref(null)
const isSticky = ref(false)
const route = useRoute()

// Close dropdown when route changes
watch(() => route.path, () => {
  isNavOpen.value = false
  activeDropdown.value = null
})

const toggleNavbar = () => {
  isNavOpen.value = !isNavOpen.value

  // Close all dropdowns when toggling navbar
  if (!isNavOpen.value) {
    activeDropdown.value = null
  }
}

const toggleDropdown = (dropdown) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = dropdown
  }
}

// Handle scroll events for sticky header
onMounted(() => {
  const handleScroll = () => {
    isSticky.value = window.scrollY > 100
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.site-header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
  transition: all 0.3s ease;
}

.site-header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  animation: slideDown 0.3s ease-in-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
}

.navbar-brand {
  display: block;
  max-width: 200px;
}

.navbar-brand img {
  max-width: 100%;
  height: auto;
}

.navbar-toggler {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  outline: none;
}

.navbar-toggler-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  position: relative;
  transition: all 0.3s;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #333;
  transition: all 0.3s;
}

.navbar-toggler-icon::before {
  transform: translateY(-8px);
}

.navbar-toggler-icon::after {
  transform: translateY(8px);
}

.navbar-toggler.active .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler.active .navbar-toggler-icon::before {
  transform: rotate(45deg);
}

.navbar-toggler.active .navbar-toggler-icon::after {
  transform: rotate(-45deg);
}

.navbar-collapse {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
  margin: 0 0.75rem;
}

.nav-link {
  display: block;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #0066cc;
  transition: width 0.3s ease;
}

.nav-item:hover .nav-link,
.nav-item.active .nav-link {
  color: #0066cc;
}

.nav-item:hover .nav-link:after,
.nav-item.active .nav-link:after {
  width: 100%;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s, transform 0.3s;
}

.dropdown-content.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.mega-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  min-width: 600px;
}

.menu-block {
  flex: 1;
  min-width: 180px;
}

.menu-block h5 {
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
}

.menu-block h5:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #0066cc;
}

.card-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.menu-card a {
  display: block;
  text-decoration: none;
  color: #333;
  transition: all 0.3s;
  padding: 0.5rem;
  border-radius: 4px;
}

.menu-card a:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
  transform: translateX(3px);
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.menu-img {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-img img {
  max-width: 100%;
  max-height: 100%;
}

.addon-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.addon-list li {
  margin-bottom: 0.5rem;
}

.addon-list li a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #333;
  transition: all 0.3s;
  padding: 0.5rem;
  border-radius: 4px;
}

.addon-list li a:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
  transform: translateX(3px);
}

.right-menu {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-no a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.menu-demo-btn {
  background-color: #0066cc;
  color: #fff !important;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
}

.menu-demo-btn:hover {
  background-color: #004c99;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 102, 204, 0.2);
}

.simple-dropdown {
  min-width: 180px;
}

.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  margin-bottom: 0.5rem;
}

.dropdown-menu li a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 0.5rem;
  transition: all 0.3s;
  border-radius: 4px;
}

.dropdown-menu li a:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
  transform: translateX(3px);
}

/* Mobile responsiveness */
@media (max-width: 992px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-collapse {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-height: 80vh;
    overflow-y: auto;
  }

  .navbar-collapse.show {
    display: flex;
  }

  .navbar-nav {
    flex-direction: column;
    width: 100%;
  }

  .nav-item {
    margin: 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }

  .nav-link:after {
    display: none;
  }

  .dropdown-content {
    position: static;
    box-shadow: none;
    display: none;
    padding: 0.5rem 0 0.5rem 1rem;
    max-height: 0;
    overflow: hidden;
    transform: none;
    transition: max-height 0.3s ease-in-out;
  }

  .dropdown-content.show {
    display: block;
    max-height: 1000px;
    transform: none;
  }

  .mega-menu {
    flex-direction: column;
    min-width: auto;
  }

  .right-menu {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .menu-demo-btn {
    margin-top: 0.5rem;
    width: 100%;
    text-align: center;
  }
}
</style>
