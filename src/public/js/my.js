const deleteProduct = (id)=>{
    if (!confirm('Are you sure you want to delete this Product?')) {
        return;
    }
    const origin = location.origin;
    $.ajax({
        url: `${origin}/product/${id}/delete`,
        method: 'GET',
        success: function (response) {
            $('#product-' + id).remove();
            location.reload();
        }
    })
}