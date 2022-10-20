<template>
  <div id="main-logo-block">
    <h1 class="cat-heads" id="tech-used">Tech experience</h1>
    <small>Click an icon for more information on experience level!</small>

    <!-- Angular Modal -->
    <div id="angular" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Angular Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>1 Years experience</li>
          <li>Used for a single fantasy team builder application</li>
          <li>
            Github links for the application can be found in the projects
            section
          </li>
        </ul>
      </div>
    </div>

    <!-- Docker Modal -->
    <div id="docker" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Docker Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 Years experience</li>
          <li>
            Used for various projects ranging from full stack to lighter
            applications
          </li>
          <li>
            Managed in the Spryker framework as part of a large integrated
            network of around 20 services
          </li>
          <li>
            Solid understanding of containerisation, dockerfiles and custom
            images
          </li>
        </ul>
      </div>
    </div>

    <!-- R-lang Modal -->
    <div id="r-lang" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">R Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>1 Years experience</li>
          <li>
            Used for various small data analytics projects ranging from
            discovery/cleaning to full machine learning algorithms
          </li>
          <li>Utilised alongside R Studio as an IDE</li>
        </ul>
      </div>
    </div>

    <!-- MongoDB Modal -->
    <div id="mongoDB" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">MongoDB Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>2 Years experience</li>
          <li>
            Used for Angular fantasy team builder on my Github. 
          </li>
          <li>Used within larger scale client projects in a cloud setting to store MQTT data</li>
        </ul>
      </div>
    </div>

    <!-- Azure Modal -->
    <div id="azure" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Azure Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>2 Years experience</li>
          <li>
            Utilised to manage cloud infrastructure on AKS on Large scale client projects. 
          </li>
          <li>Experience gained in using the various different services offered such as compute functions, cloud functions and managed SQL instances for educational projects (namely COM662 Microblogs)</li>
        </ul>
      </div>
    </div>

     <!-- GCP Modal -->
     <div id="gcp" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Google Cloud Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 Years experience</li>
          <li>
            Utilised to manage cloud infrastructure on AKS on Large scale client projects. Deployed full stack applications into GKE
          </li>
          <li>Experience gained in using the various different services offered such as serverless functions, storage buckets and APIs for educational projects (namely COM662 Microblogs)</li>
        </ul>
      </div>
    </div>

    <!-- Spryker Modal -->
    <div id="spryker" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Spryker Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>6 months experience</li>
          <li>
            Implemented as a backend API in a current proof of concept e-commerce store build alongside a Vue3/Nuxt3 SPA frontend to serve to the user
          </li>
          <li>Currently enrolled in and working towards Spryker Developer Certification through the Spryker Academy</li>
        </ul>
      </div>
    </div>

    <!-- RabbitMQ Modal -->
    <div id="gcp" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Google Cloud Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 Years experience</li>
          <li>
            Utilised to manage cloud infrastructure on AKS on Large scale client projects. Deployed full stack applications into GKE
          </li>
          <li>Experience gained in using the various different services offered such as serverless functions, storage buckets and APIs for educational projects (namely COM662 Microblogs)</li>
        </ul>
      </div>
    </div>

    <div
      class="
        uk-child-width-1-2@s
        uk-child-width-1-3@m
        uk-child-width-1-4@l
        uk-text-center
      "
      uk-grid
      uk-scrollspy="cls: uk-animation-fade; target: .techLogo; delay: 250; repeat: true"
    >
      <div v-for="logo in this.logos" v-bind:key="logo.id">
        <a :href="logo['modal-id']" uk-toggle
          ><img class="techLogo" :src="logoFolderUrl + logo.src"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        { "modal-id": "#angular", src: "angular-logo.svg" },
        { "modal-id": "#docker", src: "Docker-Logo.png" },
        { "modal-id": "#r-lang", src: "r-logo.png" },
        { "modal-id": "#mongoDB", src: "MongoDB.png" },
        { "modal-id": "#azure", src: "Microsoft-Azure.png" },
        { "modal-id": "#gcp", src: "GCP-Logo.png" },
        { "modal-id": "#spryker", src: "spryker.png" },
        { "modal-id": "#rabbit-mq", src: "rabbit-mq.png" },
        { "modal-id": "#jenkins", src: "jenkins_logo.png" },
        { "modal-id": "#elastic", src: "Elasticsearch-Logo.png" },
        { "modal-id": "#vue", src: "vue-js.png" },
        { "modal-id": "#bash", src: "bash-logo.png" },
        { "modal-id": "#redis", src: "redis_logo.svg" },
        { "modal-id": "#python", src: "python-logo.png" },
        { "modal-id": "#postgres", src: "postgres-logo.png" },
        { "modal-id": "#nginx", src: "Nginx-Logo.png" },
        { "modal-id": "#mysql", src: "mysql-logo.png" },
        { "modal-id": "#kubernetes", src: "kubernetes-logo.png" },
        { "modal-id": "#laravel", src: "laravel-logo.png" },
        { "modal-id": "#java", src: "Java-Logo.png" },
      ],
      logoFolderUrl: "/techLogos/",
    };
  },
};
</script>

<style scoped>
li {
  font-family: "Space Mono", monospace;
}
.techLogo {
  height: 10vh;
  margin: 2vh;
  background-color: white;
  padding: 1vh;
  border-radius: 10px;
}
.uk-modal {
  color: greenyellow;
}
.uk-modal-body {
  background-color: black;
  /* border: 1px solid white; */
  border-radius: 5px;
}
.uk-modal-title {
  font-weight: 800;
  font-family: "Space Mono", monospace;
  color: greenyellow;
}
#main-logo-block {
  height: 100vh;
  /* background-color: white; */
  padding: 2vh;
}
#tech-used {
  padding: 2vh;
  margin-top: 2vh;
}
</style>