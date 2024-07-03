export const host="http://localhost:3000"

/* Assets APIs */
export const getImagesHerosec=`${host}/api/assets/herosecImages`
export const getLogo=`${host}/api/assets/logo`
export const getFavicon=`${host}/api/assets/favicon`

/* Stories APIs */
export const getStories=`${host}/api/videos/get-All`
export const getVideoById=`${host}/api/videos/get-Video`

/* Product APIs */
/* All Products APIs */
export const getAllProducts=`${host}/api/products/get-All`

/* Product Fetch API */
export const getProductById=`${host}/api/products/get`

/* Products On Sale APIs */
export const getSalesProducts=`${host}/api/products/get-Sales`

/* Recent Products APIs */
export const getRecentProducts=`${host}/api/products/get-Recent`

/* Coming Soon Products APIs */
export const getComingSoonProducts=`${host}/api/products/get-Soon`

/* Image Fetch API */
export const getImage=`${host}/api/products/get-Image`


/* Cart APIs */
/* Get All Cart elements */
export const getCart=`${host}/api/cart/get-Cart`

/* Add to Cart */
export const addCart=`${host}/api/cart/add-Cart`

/* Update Cart */
export const updateCart=`${host}/api/cart/update-Cart`

/* Update Cart */
export const deleteCart=`${host}/api/cart/delete-Cart`


/* Wishlist APIs */
export const getFavorites=`${host}/api/wishlist/get`
export const addFavorites=`${host}/api/wishlist/post`