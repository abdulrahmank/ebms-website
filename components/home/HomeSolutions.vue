<template>
  <div class="home-solution-wrap">
    <div class="custom-container">
      <div class="home-solution-head">
        <h2>eBMS Solutions</h2>
        <p>Automation that enriches your Customer's experience</p>
      </div>

      <div class="home-solution">
        <div class="solution-section">
          <div class="solution-title-block">
            <h4>SHIPPING</h4>
            <div class="title-img">
              <img alt="Shipping" src="/images/shipping.png">
            </div>
          </div>

          <div class="solution-block-wrap">
            <div class="solution-block" v-for="(solution, index) in shippingSolutions" :key="`shipping-${index}`">
              <NuxtLink :to="solution.link">
                <div class="img-wrap">
                  <span class="solution-img">
                    <img :alt="solution.title" :src="solution.icon">
                  </span>
                  <span class="arrow-img">
                    <img alt="Arrow" src="/images/icons/Arrow.svg">
                  </span>
                </div>
                <h6>{{ solution.title }}</h6>
                <p>{{ solution.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="solution-section">
          <div class="solution-title-block">
            <h4>LOGISTICS</h4>
            <div class="title-img">
              <img alt="LOGISTICS" src="/images/logistic.png">
            </div>
          </div>

          <div class="solution-block-wrap">
            <div class="solution-block" v-for="(solution, index) in logisticsSolutions" :key="`logistics-${index}`">
              <NuxtLink :to="solution.link">
                <div class="img-wrap">
                  <span class="solution-img">
                    <img :alt="solution.title" :src="solution.icon">
                  </span>
                  <span class="arrow-img">
                    <img alt="Arrow" src="/images/icons/Arrow.svg">
                  </span>
                </div>
                <h6>{{ solution.title }}</h6>
                <p>{{ solution.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const shippingSolutions = [
  {
    title: 'Liner',
    description: 'Digitizing core operations with integrated enterprise system',
    icon: '/images/icons/Container.svg',
    link: '/shipping/container-line'
  },
  {
    title: 'Agency House',
    description: 'Tackling your complex activiites with advanced automation.',
    icon: '/images/icons/Agency_house.svg',
    link: '/shipping/agency-house'
  },
  {
    title: 'Feeder',
    description: 'Optimizing vessel port time with Digital technology & seamless information flow to all stakeholders.',
    icon: '/images/icons/Feeder.svg',
    link: '/shipping/feeder'
  },
  {
    title: 'NVOCC',
    description: 'Integrating your network into a single operating digital platform',
    icon: '/images/icons/NVOCC.svg',
    link: '/shipping/nvocc'
  }
]

const logisticsSolutions = [
  {
    title: 'Global Forwarding',
    description: 'Reducing operational complexity with Advanced analytics',
    icon: '/images/icons/Global_freight.svg',
    link: '/logistics/global-freight'
  },
  {
    title: 'Transport Solution',
    description: 'Making first mile effective with IOT and mobile solutions',
    icon: '/images/icons/Transport.svg',
    link: '/logistics/transport'
  },
  {
    title: 'Container Yard',
    description: 'Simplified, integrated work flows for Container yard time sensitive activities',
    icon: '/images/icons/yard.svg',
    link: '/logistics/container-yard'
  },
  {
    title: 'Warehouse / 3PL Solution',
    description: 'Creating a parallel digital workforce with RPA / BOTS taking over the drudgery.',
    icon: '/images/icons/Warehouse.svg',
    link: '/shipping/warehouse'
  }
]
</script>

<style scoped>
.home-solution-wrap {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.home-solution-head {
  text-align: center;
  margin-bottom: 3rem;
}

.home-solution-head h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.home-solution-head p {
  font-size: 1.25rem;
  color: #7f8c8d;
}

.home-solution {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.solution-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.solution-title-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e6e6e6;
  padding-bottom: 1rem;
}

.solution-title-block h4 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
}

.title-img img {
  max-height: 100px;
  width: auto;
}

.solution-block-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.solution-block {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.solution-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.solution-block a {
  display: block;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
}

.img-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.solution-img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.solution-img img {
  max-width: 100%;
  max-height: 100%;
}

.arrow-img {
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.solution-block:hover .arrow-img {
  opacity: 1;
  transform: translateX(5px);
}

.solution-block h6 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.solution-block p {
  font-size: 0.95rem;
  color: #7f8c8d;
  line-height: 1.5;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .home-solution-wrap {
    padding: 3rem 0;
  }

  .home-solution-head h2 {
    font-size: 2rem;
  }

  .home-solution-head p {
    font-size: 1.1rem;
  }

  .solution-title-block {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .title-img img {
    max-height: 80px;
  }
}
</style>
