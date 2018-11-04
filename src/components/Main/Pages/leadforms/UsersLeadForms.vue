<template>
    <div class="column is-12">
        <div class="columns">
            <div class="column is-6" style="background-color:#f5f5f5;min-height:100vh;">
                <div class="dashboard-wrapper">
                    <div class="columns is-mobile">
                        <div class="column is-size-5 ">Image</div>
                        <div class="column is-size-5 has-text-centered">Name</div>
                        <div class="column is-size-5 has-text-centered">Responses</div>
                        <div class="column is-size-5 has-text-centered">Qualified</div>
                    </div>
                    <div class="flex-card">
                        <div class="card-content">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <figure class="image is-64x64">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                                    </figure>
                                </div>
                                <div class="column is-size-6 has-text-centered">
                                    <p style="position: relative;
top: 50%;
transform: translateY(-50%); ">has-text-justified</p>
                                </div>
                                <div class="column is-size-5 has-text-centered">
                                    <p style="position: relative;
top: 50%;
transform: translateY(-50%); ">4</p>
                                </div>
                                <div class="column is-size-5 has-text-centered">
                                    <p style="position: relative;
top: 50%;
transform: translateY(-50%); ">4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="column is-6" style="min-height:100vh;background-color:#dbdbdb;">
                <div style="padding: 60px 20px 0 20px;">

                    <div class="columns" style="background-color:white;">
                        <!-- Demo section -->
                        <div class="column is-6">
                            <div class="content">
                                <h2 class=" title-bold">Responses</h2>

                                <div class="scrolllist">
                                    <ul class="user-list">
                                        <li>
                                            <div class="user-list-avatar">
                                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="">
                                            </div>
                                            <div class="user-list-info">
                                                <div class="name">Terry Daniels</div>
                                                <div class="position">CEO</div>
                                            </div>
                                            <div class="user-list-status is-online"></div>
                                        </li>
                                        <li>
                                            <div class="user-list-avatar">
                                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="">
                                            </div>
                                            <div class="user-list-info">
                                                <div class="name">Marjory Cambell</div>
                                                <div class="position">CFO</div>
                                            </div>
                                            <div class="user-list-status is-busy"></div>
                                        </li>

                                    </ul>
                                </div>
                                <div class="content mb-20 mt-20">
                                    <div class="server-widget  is-flex is-start is-vcenter">
                                            <div class="server-progress">
                                                <svg class="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                                    <circle class="circle-chart-background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                    <circle class="circle-chart-circle" stroke="#00D1B2" stroke-width="2" stroke-dasharray="89,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431"></circle>
                                                </svg>
                                                <div class="server-icon">
                                                    <i class="material-icons">dns</i>
                                                </div>
                                            </div>
                                            <div class="server-info">
                                                <div class="server-percent">89<span>%</span></div>
                                                <div class="server-text">Qualified</div>
                                            </div>
                                            <i class="bg-icon im im-icon-Server"></i>
                                        </div>
                                </div>
                                <div class="content mt-20">
                                    <h2 class="title-bold">Controls</h2>
                                    <div class="columns is-multiline">
                                        <div class="column is-6">
                                            <a class="button btn-align-center is-success">Export all qualified</a>
                                        </div>
                                        <div class="column is-6">
                                           <a class="button btn-align-center is-info">Export All Results</a>
                                        </div>
                                        <div class="column is-12">
                                           <a class="button btn-align-center is-danger">Delete All Results</a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>

                        <div class="flex-card simple-shadow">
                            <div class="card-body">
                                <div class="content">
                                    <h2 class="no-margin title-bold">Replay</h2>
                                    <p class="pt-10">Lorem ipsum dolor sit amet, has vero libris melius ea, omnis velit comprehensam duo an,
                                        meis ornatus eam ad. Ius ut labores scaevola.</p>
                                </div>
                            </div>
                        </div>

                        <!-- /Demo section -->
                    </div>
                    <div class="columns" style="background-color:#f5f5f5;">
                        <div class="column is-12">
                            <div class="flex-card simple-shadow">
                                <div class="card-body">
                                    <div class="content">
                                        <div class="table-wrapper">
                                            <table id="basic-datatable" class="table is-datatable">
                                                <thead>
                                                    <tr>
                                                        <th data-sort="0" class="sorting">Firstname</th>
                                                        <th data-sort="1" class="sorting">Lastname</th>
                                                        <th>Position</th>
                                                    </tr>
                                                    <tr class="datatable-filter-line">
                                                        <td class="datatable-filter-cell">
                                                            <input type="text" placeholder="Type to Filter... " class="datatable-filter datatable-input-text form-control"
                                                                data-filter="0">
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr data-id="0">
                                                        <td>Albert</td>
                                                        <td>Einstein</td>
                                                        <td>Scientist</td>
                                                    </tr>
                                                    <tr data-id="1">
                                                        <td>Linus</td>
                                                        <td>Torvalds</td>
                                                        <td>Scientist</td>
                                                    </tr>
                                                    <tr data-id="2">
                                                        <td>Ada</td>
                                                        <td>Lovelace</td>
                                                        <td>Scientist</td>
                                                    </tr>
                                                    <tr data-id="3">
                                                        <td>Helen</td>
                                                        <td>Miller</td>
                                                        <td>Scientist</td>
                                                    </tr>
                                                    <tr data-id="4">
                                                        <td>John</td>
                                                        <td>Doe</td>
                                                        <td>Scientist</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div id="paging-first-datatable" class="pagination"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
      name: "LeadFormTemplates"
    };
</script>

<style scoped>
    .dashboard-wrapper-special {
      /* padding: 60px 20px 0 20px; */
      margin-left: 80px;
      min-height: 100vh;
    }

    .fullheight-card-special {
      min-height: 100vh;
    }

    .scrolllist ul {
      max-height: 150px;
      width: 100%;
    }

    .scrolllist ul {
      overflow: hidden;
      overflow-y: scroll;
    }
</style>