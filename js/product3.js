let products = [
    {
        name: 'Dây Chuyền Hình Chiếc Lá Đính Đá',
        image1: 'images/bac_dc023_1_d1acc3c87dfe4fff8c5598eec8edfa20_master-removebg-preview.png',
        image2: 'images/bac_dc023_3_20bc7f900c924b41b205d626b497107c_master-removebg-preview.png',
        old_price: '190,000₫',
        curr_price: '150,000₫'
    },
    {
        name: 'Bộ Trang Sức Bộ Ba Tam Giác',
        image1: 'images/vang-hong_bts007_1_e349fbeee61242d7b5ed2bb9c23bd6b5_master-removebg-preview.png',
        image2: 'images/vang-hong_bts007_4_2ac3b75a856e4d338e9bd27b641584b1_master-removebg-preview.png',
        old_price: '295,000₫',
        curr_price: '150,000₫'
    },
    {
        name: 'Vớ Cổ Cao Bộ 3 Đôi Kiểu Trơn',
        image1: 'images/nhieu-mau_vo009_1_88231362ae544bc38095740ed57763ce_master-removebg-preview.png',
        image2: 'images/nhieu-mau_vo009_2_d4a249cf3a5b4136be3c67e3aa63cd0f_master-removebg-preview.png',
        old_price: '100,000₫',
        curr_price: '70,000₫'
    },
    {
        name: 'Vớ Cổ Cao Bộ 3 Đôi Kiểu Trơn',
        image1: 'images/nhieu-mau_vo008_1_cac25cad917b43258b0f78116a98446c_master-removebg-preview.png',
        image2: 'images/nhieu-mau_vo008_2_1054f1dd180d4ef98b4c4ae01deb44cf_master-removebg-preview.png',
        old_price: '220,000₫',
        curr_price: '180,000₫'
    },
    {
        name: 'Áo Thun "Top Giàu Sang"',
        image1: 'images/trang_ath010_1_93754a6c5ca847c7ba15d461af0dfc7b_master-removebg-preview.png',
        image2: 'images/trang_ath010_4_6443a30fb60e4845b07a11c4e7ad4911_master-removebg-preview.png',
        old_price: '300,000₫',
        curr_price: '249,000₫'
    },
    {
        name: 'Áo Thun "Bánh Mỳ Sài Gòn"',
        image1: 'images/xanh_ath013_1_f5f639b1ea3e4703af3f72bbdbcce635_master-removebg-preview.png',
        image2: 'images/xanh_ath013_3_15ee0f9765d240c5aaab437cd3bc18b7_master-removebg-preview.png',
        old_price: '300,000₫',
        curr_price: '249,000₫'
    },
    {
        name: 'Áo Thun "Hành Khỏe Đẹp"',
        image1: 'images/den_ath011_1_7ae9c8ef67084144bfb559da825c5f3b_master-removebg-preview.png',
        image2: 'images/den_ath011_3_e69118489f964858a4cf197d98b37f0b_master-removebg-preview.png',
        old_price: '300,000₫',
        curr_price: '249,000₫'
    },
    {
        name: 'Áo Thun "Hành Trứng Ấm Êm"',
        image1: 'images/hong_ath014_1_54835a66f89140ef960ac423b92698ef_master-removebg-preview.png',
        image2: 'images/hong_ath014_3_62591e3d82e94edc8b2f1e88c16648c2_master-removebg-preview.png',
        old_price: '300,000₫',
        curr_price: '249,000₫'
    },
    {
        name: 'Áo Thun "Chích Rồi Ôm Tí"',
        image1: 'images/trang_ath012_1_af52adda9fdb44a1aa6f51b1e59dc82e_master-removebg-preview.png',
        image2: 'images/trang_ath012_3_bcdaec80933d4dcbb712b8935c6f646d_master-removebg-preview.png',
        old_price: '300,000₫',
        curr_price: '249,000₫'
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
