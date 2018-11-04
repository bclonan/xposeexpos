<template>
   <div class="content column is-11">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
         <ul>
            <li>
               <router-link to="/main">Home</router-link>
            </li>
            <li>Updates</li>
         </ul>
      </nav>
      <!-- /Breadcrumbs -->
      <!-- Dashboard Wrapper -->
      <div class="dashboard-wrapper">
         <div class="columns">
            <div class="column">
               <!-- Main content -->
               <div  class="section-wrapper">
                  <!-- Dashboard content -->
                  <div class="columns dashboard-columns">
                     <div slot="mainContent" class="columns dashboard-columns is-multiline">
                        <!-- Support tickets widget -->
                        <SupportTickets
                           :updatesSupport="updatesSupport"/>
                        <!-- Support tickets widget -->
                        <!-- Available Hires widget -->
                        <AvailableHires
                           :updatesHires="updatesHires" />
                        <!-- /Available Hires widget -->
                        <!-- Projects table widget -->
                        <ProjectOverviews
                           :updatesProjectOverviews="updatesProjectOverviews"/>
                        <!-- /Projects table widget -->
                        <!-- Activity widget -->
                        <ActivityFeed :updatesActivity="updatesActivity" />
                        <!-- /Activity widget -->
                        <!-- User list widget -->
                        <div class="column is-12">
                           <div class="flex-card light-bordered light-raised padding-10">
                              <h3 class="card-heading">XYZ Support</h3>
                              <ul class="user-list">
                                 <li>
                                    <div class="user-list-avatar">
                                       <img src="https://place-hold.it/250x250" alt="">
                                    </div>
                                    <div class="user-list-info">
                                       <div class="name">Brad Clonan</div>
                                       <div class="position">CEO</div>
                                    </div>
                                    <div class="user-list-status is-online"></div>
                                 </li>
                                 <li>
                                    <div class="user-list-avatar">
                                       <img src="https://place-hold.it/250x250" alt="">
                                    </div>
                                    <div class="user-list-info">
                                       <div class="name">Steven Kellar</div>
                                       <div class="position">COO</div>
                                    </div>
                                    <div class="user-list-status is-busy"></div>
                                 </li>
                                 <li>
                                    <div class="user-list-avatar">
                                       <img src="https://place-hold.it/250x250" alt="">
                                    </div>
                                    <div class="user-list-info">
                                       <div class="name">Gabriela Clonan</div>
                                       <div class="position">Software Engineer</div>
                                    </div>
                                    <div class="user-list-status is-offline"></div>
                                 </li>
                                 <li>
                                    <div class="user-list-avatar">
                                       <img src="https://place-hold.it/250x250" alt="">
                                    </div>
                                    <div class="user-list-info">
                                       <div class="name">Helen Miller</div>
                                       <div class="position">Sales Manager</div>
                                    </div>
                                    <div class="user-list-status is-online"></div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <!-- /User list widget -->
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import SupportTickets from "./includes/SupportTickets.vue";
import ActivityFeed from "./includes/ActivityFeed.vue";
import AvailableHires from "./includes/AvailableHires.vue";
import ProjectOverviews from "./includes/ProjectOverviews.vue";

export default {
  data() {
    return {
      updatesActivity: [
        {
          userName: "John Smith",
          activityDate: "2 minutes ago",
          activityMessage: "updated builder",
          activityStatus: "read"
        },
        {
          userName: "John Smith",
          activityDate: "Yesterday",
          activityMessage: "uploaded a file",
          activityStatus: "read"
        },
        {
          userName: "John Smith",
          activityDate: "Monday",
          activityMessage: "wrote a blog",
          activityStatus: "unread"
        },
        {
          userName: "John Smith",
          activityDate: "Last Week",
          activityMessage: "sent out a email",
          activityStatus: "read"
        }
      ],
      updatesProjectOverviews: [
        {
          projectNumber: "000",
          projectName: "Funnel Builder",
          projectCompleted: "updated builder",
          projectDeadline: "nov 30 2017",
          projectStatusIcon: "tag squared is-primary",
          projectStatus: "In progress"
        },

        {
          projectNumber: "012",
          projectName: "Funnel Builder",
          projectCompleted: "	Fresh Wear Ltd.",
          projectDeadline: "jun 31 2018",
          projectStatusIcon: "tag squared is-info",
          projectStatus: "Needs Info"
        },

        {
          projectNumber: "032",
          projectName: "Funnel Builder",
          projectCompleted: "updated builder",
          projectDeadline: "nov 30 2017",
          projectStatusIcon: "tag squared is-warning",
          projectStatus: "Has Issues"
        },

        {
          projectNumber: "044",
          projectName: "Funnel Builder",
          projectCompleted: "updated builder",
          projectDeadline: "nov 30 2017",
          projectStatusIcon: "tag squared is-danger",
          projectStatus: "Canceled"
        },
        {
          projectNumber: "044",
          projectName: "Funnel Builder",
          projectCompleted: "updated builder",
          projectDeadline: "nov 30 2017",
          projectStatusIcon: "tag",
          projectStatus: "On Hold"
        }
      ],
      updatesHires: [
        {
          hireImage: "https://place-hold.it/250x250",
          hireName: "john smith",
          hirePosition: "Developer",
          hireResumeLink: "todo",
          hireExperience: "8",
          hireExperienceValue: "years",
          hireSkills: [
            {
              hireSkillClass: "is-secondary",
              hireSkillTag: "Javascript"
            },
            {
              hireSkillClass: "is-info",
              hireSkillTag: "CSS"
            },
            {
              hireSkillClass: "is-primary",
              hireSkillTag: "PHP"
            }
          ]
        },
        {
          hireImage: "https://place-hold.it/250x250",
          hireName: "al smith",
          hirePosition: "Marketer",
          hireResumeLink: "todo",
          hireExperience: "3",
          hireExperienceValue: "months",
          hireSkills: [
            {
              hireSkillClass: "is-secondary",
              hireSkillTag: "Film"
            }
          ]
        }
      ],
      updatesSupport: [
        {
          ticketId: "EB-08039",
          ticketTitle: "Cant connect to account",
          ticketUserImage: "https://place-hold.it/250x250",
          ticketUserOpenedBy: "John Smith",
          ticketOpenedOn: "3 hours ago",
          ticketTagClass: "is-success",
          ticketTagText: "New"
        },
        {
          ticketId: "EB-08419",
          ticketTitle: "Drag and drop trouble",
          ticketUserImage: "https://place-hold.it/250x250",
          ticketUserOpenedBy: "John Smith",
          ticketOpenedOn: "7 hours ago",
          ticketTagClass: "is-info",
          ticketTagText: "In progress"
        },
        {
          ticketId: "EB-08419",
          ticketTitle: "Picture Upload",
          ticketUserImage: "https://place-hold.it/250x250",
          ticketUserOpenedBy: "John Smith",
          ticketOpenedOn: "11 hours ago",
          ticketTagClass: "is-secondary",
          ticketTagText: "Closed"
        },
        {
          ticketId: "EB-08419",
          ticketTitle: "Picture Upload",
          ticketUserImage: "https://place-hold.it/250x250",
          ticketUserOpenedBy: "John Smith",
          ticketOpenedOn: "16 hours ago",
          ticketTagClass: "is-warning",
          ticketTagText: "Escalated"
        }
      ]
    };
  },
  components: {
    SupportTickets,
    ActivityFeed,
    AvailableHires,
    ProjectOverviews
  }
};
</script>

<style>
</style>
