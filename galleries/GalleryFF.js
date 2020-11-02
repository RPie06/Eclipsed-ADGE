/*<a href="../../assets/photo/photo_1.jpg" data-toggle="lightbox" data-gallery="example-gallery" class="display-image">
    <img src="../../assets/thumbnails/photo_1.jpg" class="img-fluid" alt=""></a>*/

const ffPhotoNum = 16;

for (i=1;i<=ffPhotoNum;i++){
    document.write(
        '<a href="/assets/photo/ff_'+
        i+'.jpg" data-toggle="lightbox" data-gallery="GalleryFF" class="display-image">' +
        '<img src="/assets/thumbnails/ff_'+
        i+'.jpg" class="img-fluid" alt=""></a>'
    );
}

document.write('<script>$("#gallery").justifiedGallery({rowHeight: 250,margins:9,randomize: true});</script>');
