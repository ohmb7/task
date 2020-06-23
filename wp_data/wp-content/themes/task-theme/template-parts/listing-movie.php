<?php
$args = array(  
    'post_type' => 'movie',
    'posts_per_page' => 5,
);

$loop = new WP_Query( $args );?>

<section class="movies justify-content-between row">
    <h2 class="w-100 p-3">Movies</h2>
    <?php 
        while ( $loop->have_posts() ) : $loop->the_post();

        $context = Timber::context();
        if ( $terms = get_the_terms( $post, 'genre' ) ) {
            $term_name = wp_list_pluck( $terms, 'name' );
        }

        $context = [
            'movie_title'         => get_the_title(),
            'movie_director'      => get_field( 'director' ),
            'movie_released_date' => get_field( 'year' ),
            'movie_image'         => get_the_post_thumbnail_url( get_the_ID(), 'thumbnail' ),
            'movie_permalink'     => get_permalink(),
            'movie_genre'         => $term_name,
        ];

        Timber::render( 'simple-movie-listing.twig', $context );
        
        endwhile;
        wp_reset_postdata();
    ?>
    
</section>
