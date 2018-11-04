<template>
<div class="column is-5">
  <div class="flex-card light-bordered light-raised">
    <h3 class="card-heading has-icon no-margin">Support Tickets <i class="sl sl-icon-settings"></i></h3>
    <div class="card-body is-responsive">
      <ul class="ticket-list">
        <li v-for="item in updatesSupport" :key="item.id">
          <div class="ticket-data">
            <div class="ticket-info"><span class="ticket-id">[ {{ item.ticketId }} ]</span><span class="ticket-title">{{ item.ticketTitle }}</span></div>
            <div class="ticket-meta">
              Opened by <img :src="item.ticketUserImage" alt="o" class="small-avatar"> {{ item.ticketUserOpenedBy }}
            </div>
            <div class="ticket-timestamp">
             {{ item.ticketOpenedOn }}
              
            </div>
          </div>
          <div class="ticket-action"><span class="tag" :class="item.ticketTagClass"> {{ item.ticketTagText }}</span></div>
        </li>



      </ul>
    </div>
  </div>
</div>    
</template>

<script>
    export default {
        props: {
            updatesSupport: {
                type: Array,
                required: false
            }
        },
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    
</style>