<template>
  <section>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="error">
      <h1>{{ error }}</h1>
      <router-link to="/">Go Back</router-link>
    </div>

    <div v-if="profileData" class="container">
      <h1 class="userid">
        <img
          :src="profileData.platformInfo.avatarUrl"
          alt=""
          class="platform-avatar"
        />
        {{ profileData.platformInfo.platformUserId }}
        <img
          v-if="profileData.segments[0].stats.rankScore"
          :src="profileData.segments[0].stats.rankScore.metadata.iconUrl"
          alt=""
          class="rank-icon"
        />
      </h1>

      <div class="grid">
        <div>
          <img :src="profileData.segments[1].metadata.imageUrl" alt="" />
        </div>
        <div>
          <ul>
            <li>
              <h4>Legend</h4>
              <p>{{ profileData.metadata.activeLegendName }}</p>
            </li>
            <li v-if="profileData.segments[0].stats.level">
              <h4>Apex Level</h4>
              <p>{{ profileData.segments[0].stats.level.displayValue }}</p>
            </li>
            <li v-if="profileData.segments[0].stats.season5Wins">
              <h4>Season 5 Wins</h4>
              <p>
                {{ profileData.segments[0].stats.season5Wins.displayValue }}
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.kills">
              <h4>Lifetime Kills</h4>
              <p>
                {{ profileData.segments[0].stats.kills.displayValue }}
              </p>
            </li>
            <li v-if="profileData.segments[0].stats.damage">
              <h4>Damage Done</h4>
              <p>
                {{ profileData.segments[0].stats.damage.displayValue }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/">Go Back</router-link>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      loading: false,
      error: null,
      profileData: null,
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get(
        `/api/profile/${this.$route.params.platform}/${this.$route.params.userid}`
      );
      this.profileData = response.data.data;

      this.loading = false;
    } catch (error) {
      this.loading = false;
      this.error = error.response.data.message;
    }
  },
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}

h1.userid {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 15px;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}

a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
.platform-avatar {
  width: 50px;
  margin-right: 0.5rem;
}
.rank-icon {
  width: 80px;
  margin-right: 0.7rem;
  margin-left: 3rem;
}

img {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}

li p {
  font-size: 2rem;
}

li:first-child p {
  font-size: 1.5rem;
}

li span {
  font-size: 1rem;
  color: #ccc;
}

@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>
