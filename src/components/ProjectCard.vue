<template>
  <div>
    <div
      class="
        uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin
      "
      tabindex="0"
      uk-grid
    >
      <div class="uk-card-media-left uk-cover-container">
        <img id="profile-photo" :src="image" alt="project-logo" />
      </div>
      <div>
        <div id="about-body" class="uk-card-body">
          <h2 class="uk-card-title">{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="uk-card-footer">
        <h2>Github Repos</h2>
        <div class="uk-overflow-auto">
          <table
            class="uk-table uk-table-hover uk-table-middle uk-table-divider"
          >
            <thead id="table-head">
              <tr>
                <th class="table-heads uk-table-shrink">Frontend</th>
                <th class="table-heads uk-table-shrink" v-if="backend!=undefined">Backend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a :href="frontend" uk-icon="icon: github"></a>
                </td>

                <td  v-if="backend!=undefined">
                  <a :href="backend" uk-icon="icon: github-alt"></a>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import { useProjectStore } from '@/stores/projectStore';

export default {
  props: ["backend", "frontend", "image", "title", "description"],
  data(){
    return{
      projectStore: useProjectStore()

    }
  },
  computed: {
   
  }
};

</script>

<style scoped>
.uk-card-title {
  font-family: "Space Mono", monospace;
}
.uk-card {
  min-height: fit-content;
  padding: 2vw;
  background-color: white;
  border: 2px solid black;
}

.uk-card-default{
    color: black;
}
.uk-card-footer{
width: 100%;

}
.uk-card-primary.uk-card-body .uk-table th, .uk-card-primary > :not([class*="uk-card-media"]) .uk-table th, .uk-card-secondary.uk-card-body .uk-table th, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-table th, .uk-light .uk-table th, .uk-offcanvas-bar .uk-table th, .uk-overlay-primary .uk-table th, .uk-section-primary:not(.uk-preserve-color) .uk-table th, .uk-section-secondary:not(.uk-preserve-color) .uk-table th, .uk-tile-primary:not(.uk-preserve-color) .uk-table th, .uk-tile-secondary:not(.uk-preserve-color) .uk-table th {
  color: black; 
  text-align: center;
  font-weight: 800;
  font-family: "Space Mono", monospace;
}
.uk-card-primary.uk-card-body .uk-link, .uk-card-primary.uk-card-body a, .uk-card-primary > :not([class*="uk-card-media"]) .uk-link, .uk-card-primary > :not([class*="uk-card-media"]) a, .uk-card-secondary.uk-card-body .uk-link, .uk-card-secondary.uk-card-body a, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-link, .uk-card-secondary > :not([class*="uk-card-media"]) a, .uk-light .uk-link, .uk-light a, .uk-offcanvas-bar .uk-link, .uk-offcanvas-bar a, .uk-overlay-primary .uk-link, .uk-overlay-primary a, .uk-section-primary:not(.uk-preserve-color) .uk-link, .uk-section-primary:not(.uk-preserve-color) a, .uk-section-secondary:not(.uk-preserve-color) .uk-link, .uk-section-secondary:not(.uk-preserve-color) a, .uk-tile-primary:not(.uk-preserve-color) .uk-link, .uk-tile-primary:not(.uk-preserve-color) a, .uk-tile-secondary:not(.uk-preserve-color) .uk-link, .uk-tile-secondary:not(.uk-preserve-color) a {
  color: inherit;
}
uk-card-primary.uk-card-body .uk-h1, .uk-card-primary.uk-card-body .uk-h2, .uk-card-primary.uk-card-body .uk-h3, .uk-card-primary.uk-card-body .uk-h4, .uk-card-primary.uk-card-body .uk-h5, .uk-card-primary.uk-card-body .uk-h6, .uk-card-primary.uk-card-body .uk-heading-2xlarge, .uk-card-primary.uk-card-body .uk-heading-large, .uk-card-primary.uk-card-body .uk-heading-medium, .uk-card-primary.uk-card-body .uk-heading-small, .uk-card-primary.uk-card-body .uk-heading-xlarge, .uk-card-primary.uk-card-body h1, .uk-card-primary.uk-card-body h2, .uk-card-primary.uk-card-body h3, .uk-card-primary.uk-card-body h4, .uk-card-primary.uk-card-body h5, .uk-card-primary.uk-card-body h6, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h1, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h2, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h3, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h4, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h5, .uk-card-primary > :not([class*="uk-card-media"]) .uk-h6, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-2xlarge, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-large, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-medium, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-small, .uk-card-primary > :not([class*="uk-card-media"]) .uk-heading-xlarge, .uk-card-primary > :not([class*="uk-card-media"]) h1, .uk-card-primary > :not([class*="uk-card-media"]) h2, .uk-card-primary > :not([class*="uk-card-media"]) h3, .uk-card-primary > :not([class*="uk-card-media"]) h4, .uk-card-primary > :not([class*="uk-card-media"]) h5, .uk-card-primary > :not([class*="uk-card-media"]) h6, .uk-card-secondary.uk-card-body .uk-h1, .uk-card-secondary.uk-card-body .uk-h2, .uk-card-secondary.uk-card-body .uk-h3, .uk-card-secondary.uk-card-body .uk-h4, .uk-card-secondary.uk-card-body .uk-h5, .uk-card-secondary.uk-card-body .uk-h6, .uk-card-secondary.uk-card-body .uk-heading-2xlarge, .uk-card-secondary.uk-card-body .uk-heading-large, .uk-card-secondary.uk-card-body .uk-heading-medium, .uk-card-secondary.uk-card-body .uk-heading-small, .uk-card-secondary.uk-card-body .uk-heading-xlarge, .uk-card-secondary.uk-card-body h1, .uk-card-secondary.uk-card-body h2, .uk-card-secondary.uk-card-body h3, .uk-card-secondary.uk-card-body h4, .uk-card-secondary.uk-card-body h5, .uk-card-secondary.uk-card-body h6, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h1, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h2, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h3, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h4, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h5, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-h6, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-2xlarge, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-large, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-medium, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-small, .uk-card-secondary > :not([class*="uk-card-media"]) .uk-heading-xlarge, .uk-card-secondary > :not([class*="uk-card-media"]) h1, .uk-card-secondary > :not([class*="uk-card-media"]) h2, .uk-card-secondary > :not([class*="uk-card-media"]) h3, .uk-card-secondary > :not([class*="uk-card-media"]) h4, .uk-card-secondary > :not([class*="uk-card-media"]) h5, .uk-card-secondary > :not([class*="uk-card-media"]) h6, .uk-light .uk-h1, .uk-light .uk-h2, .uk-light .uk-h3, .uk-light .uk-h4, .uk-light .uk-h5, .uk-light .uk-h6, .uk-light .uk-heading-2xlarge, .uk-light .uk-heading-large, .uk-light .uk-heading-medium, .uk-light .uk-heading-small, .uk-light .uk-heading-xlarge, .uk-light h1, .uk-light h2, .uk-light h3, .uk-light h4, .uk-light h5, .uk-light h6, .uk-offcanvas-bar .uk-h1, .uk-offcanvas-bar .uk-h2, .uk-offcanvas-bar .uk-h3, .uk-offcanvas-bar .uk-h4, .uk-offcanvas-bar .uk-h5, .uk-offcanvas-bar .uk-h6, .uk-offcanvas-bar .uk-heading-2xlarge, .uk-offcanvas-bar .uk-heading-large, .uk-offcanvas-bar .uk-heading-medium, .uk-offcanvas-bar .uk-heading-small, .uk-offcanvas-bar .uk-heading-xlarge, .uk-offcanvas-bar h1, .uk-offcanvas-bar h2, .uk-offcanvas-bar h3, .uk-offcanvas-bar h4, .uk-offcanvas-bar h5, .uk-offcanvas-bar h6, .uk-overlay-primary .uk-h1, .uk-overlay-primary .uk-h2, .uk-overlay-primary .uk-h3, .uk-overlay-primary .uk-h4, .uk-overlay-primary .uk-h5, .uk-overlay-primary .uk-h6, .uk-overlay-primary .uk-heading-2xlarge, .uk-overlay-primary .uk-heading-large, .uk-overlay-primary .uk-heading-medium, .uk-overlay-primary .uk-heading-small, .uk-overlay-primary .uk-heading-xlarge, .uk-overlay-primary h1, .uk-overlay-primary h2, .uk-overlay-primary h3, .uk-overlay-primary h4, .uk-overlay-primary h5, .uk-overlay-primary h6, .uk-section-primary:not(.uk-preserve-color) .uk-h1, .uk-section-primary:not(.uk-preserve-color) .uk-h2, .uk-section-primary:not(.uk-preserve-color) .uk-h3, .uk-section-primary:not(.uk-preserve-color) .uk-h4, .uk-section-primary:not(.uk-preserve-color) .uk-h5, .uk-section-primary:not(.uk-preserve-color) .uk-h6, .uk-section-primary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-section-primary:not(.uk-preserve-color) .uk-heading-large, .uk-section-primary:not(.uk-preserve-color) .uk-heading-medium, .uk-section-primary:not(.uk-preserve-color) .uk-heading-small, .uk-section-primary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-section-primary:not(.uk-preserve-color) h1, .uk-section-primary:not(.uk-preserve-color) h2, .uk-section-primary:not(.uk-preserve-color) h3, .uk-section-primary:not(.uk-preserve-color) h4, .uk-section-primary:not(.uk-preserve-color) h5, .uk-section-primary:not(.uk-preserve-color) h6, .uk-section-secondary:not(.uk-preserve-color) .uk-h1, .uk-section-secondary:not(.uk-preserve-color) .uk-h2, .uk-section-secondary:not(.uk-preserve-color) .uk-h3, .uk-section-secondary:not(.uk-preserve-color) .uk-h4, .uk-section-secondary:not(.uk-preserve-color) .uk-h5, .uk-section-secondary:not(.uk-preserve-color) .uk-h6, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-large, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-medium, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-small, .uk-section-secondary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-section-secondary:not(.uk-preserve-color) h1, .uk-section-secondary:not(.uk-preserve-color) h2, .uk-section-secondary:not(.uk-preserve-color) h3, .uk-section-secondary:not(.uk-preserve-color) h4, .uk-section-secondary:not(.uk-preserve-color) h5, .uk-section-secondary:not(.uk-preserve-color) h6, .uk-tile-primary:not(.uk-preserve-color) .uk-h1, .uk-tile-primary:not(.uk-preserve-color) .uk-h2, .uk-tile-primary:not(.uk-preserve-color) .uk-h3, .uk-tile-primary:not(.uk-preserve-color) .uk-h4, .uk-tile-primary:not(.uk-preserve-color) .uk-h5, .uk-tile-primary:not(.uk-preserve-color) .uk-h6, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-large, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-medium, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-small, .uk-tile-primary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-tile-primary:not(.uk-preserve-color) h1, .uk-tile-primary:not(.uk-preserve-color) h2, .uk-tile-primary:not(.uk-preserve-color) h3, .uk-tile-primary:not(.uk-preserve-color) h4, .uk-tile-primary:not(.uk-preserve-color) h5, .uk-tile-primary:not(.uk-preserve-color) h6, .uk-tile-secondary:not(.uk-preserve-color) .uk-h1, .uk-tile-secondary:not(.uk-preserve-color) .uk-h2, .uk-tile-secondary:not(.uk-preserve-color) .uk-h3, .uk-tile-secondary:not(.uk-preserve-color) .uk-h4, .uk-tile-secondary:not(.uk-preserve-color) .uk-h5, .uk-tile-secondary:not(.uk-preserve-color) .uk-h6, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-2xlarge, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-large, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-medium, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-small, .uk-tile-secondary:not(.uk-preserve-color) .uk-heading-xlarge, .uk-tile-secondary:not(.uk-preserve-color) h1, .uk-tile-secondary:not(.uk-preserve-color) h2, .uk-tile-secondary:not(.uk-preserve-color) h3, .uk-tile-secondary:not(.uk-preserve-color) h4, .uk-tile-secondary:not(.uk-preserve-color) h5, .uk-tile-secondary:not(.uk-preserve-color) h6 {
  color: black;
  font-weight: 800;
  font-family: "Space Mono", monospace;

}
</style>