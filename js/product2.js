let products = [
    {
        name: 'Túi Xách Nhỏ Đeo Chéo Nắp Viền',
        image1: 'images/kem_txn488_1_4dfaafbba8ee44a5b538866e027855c1_master-removebg-preview.png',
        image2: 'images/kem_txn488_8_76c787631a3f4467983784902f6acd37_master-removebg-preview.png',
        old_price: '755,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Túi Xách Nhỏ Đeo Vai Khóa Mây',
        image1: 'images/den_txn489_1_8de6c24b983c4245aa8679821b08e6eb_master-removebg-preview.png',
        image2: 'images/den_txn489_7_6442850db10b468daaaeb1a641557e90_master-removebg-preview.png',
        old_price: '795,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Túi Xách Trung Top Handle    ',
        image1: 'images/kem_txt246_1_e0878277d2344723b11d25b229b96b9d_master-removebg-preview.png',
        image2: 'images/kem_txt246_7_952bc096d6d04b0d9b2bd539ad526c9f_master-removebg-preview.png',
        old_price: '895,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Túi Xách Trung Trang Trí',
        image1: 'images/den_txt245_1_cded3e4131b342108aab4d4eea396917_master-removebg-preview.png',
        image2: 'images/den_txt245_7_f7422a690bfe412bb427a460c7dd6578_master-removebg-preview.png',
        old_price: '955,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Túi Xách Lớn Tote Gắn Charm Pixel',
        image1: 'images/kem_txl059_1_182a14e544604fdf8acb3d28a4803e74_master-removebg-preview.png',
        image2: 'images/kem_txl059_7_17e644d15659480a9f264c73b05b1f14_master-removebg-preview.png',
        old_price: '795,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Túi Xách Lớn Top Handle',
        image1: 'images/hong_txl060_1_cb210a907e074a59896741e86830f85d_master-removebg-preview.png',
        image2: 'images/hong_txl060_7_e559d4961764487187fc016658a7d35e_master-removebg-preview.png',
        old_price: '795,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Balo Nhiều Ngăn',
        image1: 'images/nau-vang_bl118_1_52f8d08c83704607aba5433b60c4dc6d_master-removebg-preview.png',
        image2: 'images/nau-vang_bl118_7_c6aa611429bc4ee1a747aeccc3885bbe_master-removebg-preview.png',
        old_price: '895,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Balo Top Handle',
        image1: 'images/hong_bl117_1_009eb182f71c4df29af4a7fcfb18fe48_master-removebg-preview.png',
        image2: 'images/hong_bl117_7_911d6c2f396f4b9e95b5fb5fb5d11939_master-removebg-preview.png',
        old_price: '795,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Ví Trang Trí Khóa Kim Loại Raw',
        image1: 'images/kem_vi161_1_502b5c1d92204f7d9284f76f62d6de20_master-removebg-preview.png',
        image2: 'images/kem_vi161_7_1dc60bc0331b47579456ed2f12fbb844_master-removebg-preview.png',
        old_price: '695,000₫',
        curr_price: '500,000₫'
    },
    {
        name: 'Ví The Maze',
        image1: 'images/xanh-nhat_vi159_1_b35061ac515949a3b18fd3175244404e_master-removebg-preview.png',
        image2: 'images/xanh-nhat_vi159_7_aae140deb2f0469ebc58dc413e2da1d3_master-removebg-preview.png',
        old_price: '555,000₫',
        curr_price: '400,000₫'
    },
    {
        name: 'Mắt Kính Vuông Kim Loại',
        image1: 'images/den_mk059_1_4e1abed2b4a74091ae8c91a767fb6c77_master-removebg-preview.png',
        image2: 'images/den_mk059_3_645b0263ed3e463f90d5d0c1e9d61be5_master-removebg-preview.png',
        old_price: '495,000₫',
        curr_price: '300,000₫'
    },
    {
        name: 'Mắt Kính Mắt Mèo Nhựa',
        image1: 'images/den_mk058_1_6384fb0f98bf409781be35c163228759_master-removebg-preview.png',
        image2: 'images/den_mk058_3_275798803a064d2abdf09c2238e11c03_master-removebg-preview.png',
        old_price: '495,000₫',
        curr_price: '300,000₫'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)
// renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))

//đổi màu
