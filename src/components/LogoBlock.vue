<template>
  <div id="main-logo-block">
    <h1 class="cat-heads" id="tech-used">Tech experience</h1>
    <small id="small-info">Click an icon for more information on experience level!</small>

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
          <li>Experience gained in using the various different services offered such as compute functions, cloud
            functions and managed SQL instances for educational projects (namely COM662 Microblogs)</li>
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
            Utilised to manage cloud infrastructure on AKS on Large scale client projects. Deployed full stack
            applications into GKE
          </li>
          <li>Experience gained in using the various different services offered such as serverless functions, storage
            buckets and APIs for educational projects (namely COM662 Microblogs)</li>
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
            Implemented as a backend API in a current proof of concept e-commerce store build alongside a Vue3/Nuxt3 SPA
            frontend to serve to the user
          </li>
          <li>Certified Spryker Foundations Developer</li>
        </ul>
      </div>
    </div>

    <!-- RabbitMQ Modal -->
    <div id="rabbit-mq" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Rabbit MQ Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>2 Years experience</li>
          <li>
            Utilised in kubernetes architectures that i've monitored
          </li>
          <li>Mainly utilised as part of the Spryker architecture</li>
        </ul>
      </div>
    </div>

    <!-- Jenkins Modal -->
    <div id="jenkins" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Jenkins Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>1 years experience</li>
          <li>
            Utilised as part of K8S stack that I was monitoring
          </li>
          <li>Mainly utilised as part of the Spryker architecture</li>
        </ul>
      </div>
    </div>


    <!-- Elasticsearch Modal -->
    <div id="elastic" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">ElasticSearch Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>2 years experience</li>
          <li>
            Utilised in connection with an NLP algorithm to store word vectors, utilised queries, and interacted with
            data on backend.
          </li>
          <li>Also utilised as part of the Spryker architecture</li>
        </ul>
      </div>
    </div>

    <!-- Vue Modal -->
    <div id="vue" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Vue Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years experience</li>
          <li>
            Implemented as the frontend in multiple full stack applications, (evident on GH).
          </li>
          <li>Experience using it alongside Nuxt</li>
          <li>Experience using it inside a containerised environment</li>
        </ul>
      </div>
    </div>


    <!-- Bash Modal -->
    <div id="bash" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Bash Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years experience</li>
          <li>
            Utilised in Ubuntu/ Debian daily for development.
          </li>
          <li>Utilised to complete various scripting tasks</li>
        </ul>
      </div>
    </div>

    <!-- Redis Modal -->
    <div id="redis" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Redis Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years experience</li>
          <li>
            Utilised in various full stack set-ups
          </li>
          <li>Utilised heavily as part of Spryker data layer</li>
        </ul>
      </div>
    </div>

    <!-- Python Modal -->
    <div id="python" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Python Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years industry experience</li>
          <li>additional 5 years of hobby/ academic experience</li>
          <li>
            Utilised as first programming language from teenage years
          </li>
          <li>Utilised to format/ manipulate large datasets</li>
          <li>Utilised in various automating Script Tasks</li>
          <li>Flask backends</li>
          <li>Serverless cloud functions, (Openfaas and Google Cloud functions)</li>
          <li>Data analytics (Pandas, matplot etc...)</li>
          <li>Machine learning (Keras)</li>
        </ul>
      </div>
    </div>

    <!-- Postgres Modal -->
    <div id="postgres" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Postgres Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years experience</li>
          <li>
            Utilised as part of various stacks
          </li>
          <li>Also utilised PostGIS for storage of geo-spatial data</li>
        </ul>
      </div>
    </div>

    <!-- Nginx Modal -->
    <div id="nginx" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Nginx Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years experience</li>
          <li>
            Utilised as part of various stacks
          </li>
          <li>Main web server for all stacks i've composed</li>
          <li>Experience setting up for various configurations and requirements</li>
        </ul>
      </div>
    </div>

    <!-- MySql Modal -->
    <div id="mysql" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">MySql Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>3 years experience</li>
          <li>
            Utilised with certain stacks, mainly in the form of MariaDB
          </li>
          <li>Utilised in various educational projects throughout University</li>
        </ul>
      </div>
    </div>

    <!-- K8s Modal -->
    <div id="kubernetes" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <h2 class="uk-modal-title">Kubernetes Experience</h2>
        <ul class="uk-list uk-list-square">
          <li>1 years experience</li>
          <li>
            Conducted adminstrative and monitoring tasks on live commerical clusters, utilising tools like Loki and
            Prometheus.
          </li>
          <li>Utilised to deploy full stack social site for my Final year dissertation</li>
          <li>Currently working towards my KCA accredited by the Linux foundation</li>
        </ul>
      </div>


      <!-- Laravel Modal -->
      <div id="laravel" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">Laravel Experience</h2>
          <ul class="uk-list uk-list-square">
            <li>3 years experience</li>
            <li>
              Most used backend framework across development career
            </li>
            <li>Multiple backend APIs composed using this on my GH</li>
            <li>Utilised inside a containerised environment (docker/ k8s)</li>
          </ul>
        </div>
      </div>


      <!-- Java Modal -->
      <div id="java" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">Java Experience</h2>
          <ul class="uk-list uk-list-square">
            <li>1 year experience</li>
            <li>
              Utilised in Educational projects and/or assignments
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div id="logo-slider" class="uk-align-center">
      <div uk-slider>
          <ul class="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
              <li id="logo-box" v-for="logo in this.logos" v-bind:key="logo.id">
                <a :href="logo['modal-id']" uk-toggle><img class="techLogo" :src="logoFolderUrl + logo.src" /></a>
              </li>
          </ul>
      </div>
      <!-- <div class="
        uk-child-width-1-2@s
        uk-child-width-1-3@m
        uk-child-width-1-4@l
        uk-text-center
      " uk-grid uk-scrollspy="cls: uk-animation-fade; target: .techLogo; repeat: true">
      <div v-for="logo in this.logos" v-bind:key="logo.id">
        <a :href="logo['modal-id']" uk-toggle><img class="techLogo" :src="logoFolderUrl + logo.src" /></a>
      </div> -->
    <!-- </div> -->

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

small {
  color: white;
}

.techLogo {
  height: 20vh;
  margin: 2vh;
  /* background-color: white; */
  padding: 2vh;
  border-radius: 10px;
}

.uk-grid{
  background-color: lightgreen;
  width: 60vw;
  margin-left: 17vw;
}

.uk-modal {
  color: greenyellow;
  margin-top: 20vh;
}

.uk-modal-body {
  background-color: white;
  /* border: 1px solid white; */
  border-radius: 5px;
  background-color: black;
}

.uk-modal-title {
  font-weight: 800;
  font-family: "Space Mono", monospace;
  color: greenyellow;
}

#small-info {
  color: white;
  padding-bottom: 5vh;

}

#logo-slider{
  margin-top: 20vh;
}

#logo-box{
  background-color: lightgreen;
  margin: 2vw;
  border-radius: 5px;
  width: fit-content;
}

#main-logo-block {
  height: 100vh;
  background-color: black;
  padding: 3vh;
  margin-bottom: 2;
}

#tech-used {
  padding: 2vh;
  margin-top: 2vh;
  color: white;
}
</style>