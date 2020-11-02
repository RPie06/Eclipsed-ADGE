/*<a href="../../assets/photo/photo_1.jpg" data-toggle="lightbox" data-gallery="example-gallery" class="display-image">
    <img src="../../assets/thumbnails/photo_1.jpg" class="img-fluid" alt=""></a>*/

const landListID=[2,6,9,10,11,32,33,35,36,37,38,39,40,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],
      cultureListID=[1,3,4,5,7,8,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,34];

for (i=0;i<landListID.length;i++){
    document.write(
        '<a href="/assets/photo/photo_'+
        landListID[i]+'.jpg" data-toggle="lightbox" data-gallery="GalleryLand" class="display-image">' +
        '<img src="/assets/thumbnails/photo_'+
        landListID[i]+'.jpg" class="img-fluid" alt=""></a>'
    );
}

document.write('<script>$("#gallery").justifiedGallery({rowHeight: 250,margins:9,randomize: true});</script>');