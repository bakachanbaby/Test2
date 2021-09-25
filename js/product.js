let products = [
    {
        name: 'Sneaker Jelly',
        image1: 'images/cam_tt03033_1_2d7e149ea50e43fd93ac4224c30aff87_master-removebg-preview.png',
        image2: 'images/cam_tt03033_7_8c11e0ab86614e02b1cbb58f1aab58c0_master-removebg-preview.png',
        old_price: '695,000₫',
        curr_price: '500,000₫'
    },
    {
        name: 'Sneakers Ocean Wave',
        image1: 'images/xanh-tim_tt05007_1_36caf1953a0a4be4adb187c365aadb37_master-removebg-preview.png',
        image2: 'images/xanh-tim_tt05007_7_64d428e86c0444d6b812aec30e0a85b3_master-removebg-preview.png',
        old_price: '795,000₫',
        curr_price: '600,000₫'
    },
    {
        name: 'Giày Cao Gót Mũi Nhọn Gót Trụ',
        image1: 'images/hong_cg05112_1_bf9fbd481606439dbb7e17f6e497c207_master-removebg-preview.png',
        image2: 'images/hong_cg05112_7_b3f3eb3852fe49ffb0bb8b2d13588710_master-removebg-preview.png',
        old_price: '455,000₫',
        curr_price: '350,000₫'
    },
    {
        name: 'Giày Cao Gót Mũi Nhọn Gắn Dây Xích Mảnh',
        image1: 'images/kem_cg09145_1_18e2ab82832346f6982def001237f366_master-removebg-preview.png',
        image2: 'images/kem_cg09145_7_521ab2e484984978a3cda77d9eadff50_master-removebg-preview.png',
        old_price: '495,000₫',
        curr_price: '350,000₫'
    },
    {
        name: 'Giày Xăng Đan Quai Ngang',
        image1: 'images/den_sd03012_1_16526aae8aa644f496a7c1a58bd43185_master-removebg-preview.png',
        image2: 'images/den_sd03012_2_c00fd13009cd405fac33d2d63be0bf71_master-removebg-preview.png',
        old_price: '390,000₫',
        curr_price: '220,000₫'
    },
    {
        name: 'Giày Xăng Đan Khóa Gài',
        image1: 'images/hong_sd07068_1_2c475afe4dfb467d86cf817437e21e97_master-removebg-preview.png',
        image2: 'images/hong_sd07068_7_37e8f6b628fb4da9af90543c266a4a77_master-removebg-preview.png',
        old_price: '495,000₫',
        curr_price: '350,000₫'
    },
    {
        name: 'Giày Mules Quai Khoá Trang Trí',
        image1: 'images/xanh-xam_bb03069_1_f6cd50ce1dff495ba466314630233840_master-removebg-preview.png',
        image2: 'images/xanh-xam_bb03069_8_c86139c373d943c2bffadf7d9489569a_master-removebg-preview.png',
        old_price: '455,000₫',
        curr_price: '300,000₫'
    },
    {
        name: 'Giày Búp Bê Dây Mảnh',
        image1: 'images/trang_bb03068_1_7eb3b143b39e4e31b0fa56a635ceedf2_master-removebg-preview.png',
        image2: 'images/trang_bb03068_8_fa54e2c6bc98445d9579bf4d33424277_master-removebg-preview.png',
        old_price: '455,000₫',
        curr_price: '300,000₫'
    },
    {
        name: 'Giày Boot Dây Kéo',
        image1: 'images/nau_bo07016_1_0588254f5b7f410a87347b400a617142_master-removebg-preview.png',
        image2: 'images/nau_bo07016_7_a8718fd06b314c5fbfc379ff801d7daa_master-removebg-preview.png',
        old_price: '655,000₫',
        curr_price: '400,000₫'
    },
    {
        name: 'Giày Boot Gót Vuông',
        image1: 'images/xam_bo09015_1_7ea8965cebc7408f8be47a12afa96c1d_master-removebg-preview.png',
        image2: 'images/xam_bo09015_8_e0b23031e0fd4499a00f58c9392d3420_master-removebg-preview.png',
        old_price: '655,000₫',
        curr_price: '400,000₫'
    },
    {
        name: 'Dép Quai Ngang Phối Ánh Kim',
        image1: 'images/xanh-xam_sd01109_1_54cd3158361d4efdb570d122f7243973_master-removebg-preview.png',
        image2: 'images/xanh-xam_sd01109_7_eaef97613b074fc69fbe140aaed89a60_master-removebg-preview.png',
        old_price: '455,000₫',
        curr_price: '220,000₫'
    },
    {
        name: 'Giày Sandal Bệt Quai Ngang',
        image1: 'images/hong_sd01108_1_5b2517bed4984bc9a44fae526d2f53ce_master-removebg-preview.png',
        image2: 'images/hong_sd01108_7_78f9fed215404fad9b52d0a905224a2e_master-removebg-preview (1).png',
        old_price: '395,000₫',
        curr_price: '220,000₫'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img class= "img_1" src="${e.image1}" alt="">
                        <img class = "img_2" src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="#" class="btn-flat btn-hover btn-shop-now">shop now</a>
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





const btn = document.querySelector('.btn-shop-now');
const img1 = document.querySelector('.img_1')
const img2 = document.querySelector('.img_2')
btn.addEventListener('mousemove',function(event){
    img1.style.display = 'none';
    img2.style.display = 'block';
}) 
btn.addEventListener('mouseout',function(event){
    img1.style.display = 'block';
    img2.style.display = 'none';
}) 
