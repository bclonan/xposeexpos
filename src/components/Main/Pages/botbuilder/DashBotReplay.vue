<template>
 <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li><router-link to="/main">Home</router-link></li>
                <li>Bot Replay</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">           
                <div class="column">
                    <!-- Main content -->
                    <div class="section-wrapper">
                        <!-- Dashboard content -->
                        <div class="columns dashboard-columns">
                            <div class="column is-7 is-offset-1">
                                        <div class="flex-card featured-feed-post light-bordered light-raised">
                                            <div class="image">
                                              
                                                <img src="../../../../styles/Main/images/bg/tech-pattern.png" alt="">
                                                <div class="image-overlay"></div>
                                                
                                                <button class="like fab-btn mini">
                                                    <span class="like-wrapper">
                                                        <i class="material-icons unliked">favorite_border</i>
                                                        <i class="material-icons liked">favorite</i>
                                                        <span class="like-overlay"></span>
                                                    </span>
                                                </button>
                                                <button class="back fab-btn mini">
                                                    <i class="material-icons">arrow_back</i>
                                                </button>
                                            </div>
                                            <div class="card-body is-responsive">
                                                <h2 class="responsive-title has-text-centered mt-40">Bot Name</h2>
                                                <div class="post-meta">
                                                    <div class="author-meta">
                                                        
                                                        <div class="post-timestamp">
                                                            <i class="sl sl-icon-clock"></i>Response Time</div>
                                                    </div>
                                                    <div class="comments-meta">
                                                        
                                                        <div class="counter">steps</div>
                                                    </div>
                                                </div>
                                                <div class="post-body">
                                                    <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. <a href="#">Cu vim ludus equidem facilisis</a>, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>
        
                                                    <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. Cu vim ludus equidem facilisis, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>
        
                                                    <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. Cu vim ludus equidem facilisis, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>
        
                                                    <p>Lorem ipsum dolor sit amet, id qui elit explicari, mel ne stet semper. Duo audiam antiopam petentium in, diceret appetere aliquando pri id. Qui porro dolor deserunt ad, nec inani dolorum qualisque in, vidit apeirian partiendo ea est. Duo cu qualisque mediocritatem, graece iuvaret eripuit in usu, usu congue impedit percipitur no. Cu vim ludus equidem facilisis, dico ullum labitur ad mel. Id odio aperiam eripuit quo, dolores forensibus per te. </p>
                                                </div>
                                                <div class="post-share">
                                                    <i class="fa fa-facebook-f"></i>
                                                    <i class="fa fa-twitter"></i>
                                                    <i class="fa fa-linkedin"></i>
                                                    <i class="fa fa-tumblr"></i>
                                                </div>
                                            </div>
                                        </div>
        
                                        
                                    </div>
                                    <div class="column is-4">
                                        <div class="flex-card light-bordered light-raised padding-10">
                                            <h3 class="card-heading">Stats</h3>
        
                                          
        
                                            
        
                                         
        
        
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
  name: "DashBotReplay"
};
</script>

<style>
</style>