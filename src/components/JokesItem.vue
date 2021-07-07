<template>
  <li class="joke-item" v-bind:class="{ liked: joke.like }">
    <div class="joke-item__joke" v-if="joke.setup">
      <div class="joke__setup">{{ joke.setup }}</div>
      <div class="joke__show-delivery" @click="showDelivery(joke.id)">
        Show delivery
      </div>
      <div class="joke__delivery" :data-delivery="joke.id">
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>{{ joke.delivery }}</span>
      </div>
    </div>
    <div class="joke-item__joke" v-else>{{ joke.joke }}</div>
    <div class="joke-item__like-button">
      <button class="like-button" @click="$emit('like', joke.id)">
        <div class="like-button_active" v-if="joke.like">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 24H0V0h24v24z" fill="none" />
            <path
              d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"
            />
          </svg>
        </div>
        <div class="like-button_inactive" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M13.11 5.72l-.57 2.89c-.12.59.04 1.2.42 1.66.38.46.94.73 1.54.73H20v1.08L17.43 18H9.34c-.18 0-.34-.16-.34-.34V9.82l4.11-4.1M14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1z"
            />
          </svg>
        </div>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'JokesItem',
  props: ['joke'],
  setup() {
    const showDelivery = function (id) {
      document
        .querySelector(`[data-delivery="${id}"]`)
        .classList.toggle('active');
    };
    return { showDelivery };
  },
};
</script>

<style scoped>
.joke-item {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.125rem);
}

.joke-item.liked {
  background: rgba(142, 228, 175, 0.3);
}

.like-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 0;
  cursor: pointer;
}

.like-button:focus {
  outline: none;
}

.like-button_inactive,
.like-button_active {
  display: flex;
}

.like-button_inactive svg,
.like-button_active svg {
  width: 1.5em;
  height: 1.5em;
}

.like-button_active svg {
  fill: #5cdb95;
}

.like-button_inactive svg {
  fill: #8ee4af;
}
.joke__show-delivery {
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.joke__delivery {
  height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #5cdb95;
  transition: 0.2s ease-in-out;
}

.joke__delivery.active {
  height: auto;
  transition: 0.2s ease-in-out;
}
</style>
