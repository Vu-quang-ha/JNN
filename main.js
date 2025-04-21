document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedProducts();
    loadTestimonials();
    handleNewsletterSignup();
    initializePage();
});

// Placeholder Product Data
const featuredProducts = [
    // DOG CATEGORY - 15 items
    {
        id: 1,
        name: "Chó Golden Retriever",
        price: "15.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 2,
        name: "Chó Corgi",
        price: "18.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 3,
        name: "Chó Poodle Toy",
        price: "12.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1594922009922-d1665ed9f239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 4,
        name: "Chó Husky",
        price: "16.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 5,
        name: "Chó Bulldog",
        price: "20.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 6,
        name: "Chó Pug",
        price: "14.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1553698217-934b000f1f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 7,
        name: "Chó Chihuahua",
        price: "11.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 8,
        name: "Chó Labrador",
        price: "16.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 9,
        name: "Chó Beagle",
        price: "13.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 10,
        name: "Chó Shiba Inu",
        price: "22.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1583512603834-01a3a1e56241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 11,
        name: "Chó Bắc Kinh",
        price: "15.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 12,
        name: "Chó Phốc Sóc",
        price: "14.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1583337954725-d6ee06ce30fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 13,
        name: "Chó Pitbull",
        price: "19.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1571868094976-6d889b0bc194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 14,
        name: "Chó Doberman",
        price: "18.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1598385841835-4ae162c13038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    {
        id: 15,
        name: "Chó Dachshund",
        price: "13.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1647977413221-8538d0303ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "dog"
    },
    
    // CAT CATEGORY - 15 items
    {
        id: 16,
        name: "Mèo Anh Lông Ngắn",
        price: "8.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1611267254323-4db7799f732e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 17,
        name: "Mèo Ba Tư",
        price: "10.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 18,
        name: "Mèo Ragdoll",
        price: "12.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 19,
        name: "Mèo Scottish Fold",
        price: "9.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1604675223954-b1aabd668078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 20,
        name: "Mèo Maine Coon",
        price: "15.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 21,
        name: "Mèo Sphynx",
        price: "18.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1603777953662-5366585693d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 22,
        name: "Mèo Bengal",
        price: "20.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 23,
        name: "Mèo Siamese",
        price: "9.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1555685812-4b8f59dc8377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 24,
        name: "Mèo Munchkin",
        price: "14.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1626602411112-10742f9a3ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 25,
        name: "Mèo Exotic Shorthair",
        price: "11.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 26,
        name: "Mèo Abyssinian",
        price: "10.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 27,
        name: "Mèo Birman",
        price: "13.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1594142404563-64e5187f534d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 28,
        name: "Mèo Norwegian Forest",
        price: "16.000.000 VNĐ",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 29,
        name: "Mèo Russian Blue",
        price: "12.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    {
        id: 30,
        name: "Mèo American Shorthair",
        price: "8.500.000 VNĐ",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "cat"
    },
    
    // PET FOOD CATEGORY - 15 items
    {
        id: 31,
        name: "Thức ăn Royal Canin cho chó",
        price: "500.000 VNĐ",
        image: "https://cdn11.bigcommerce.com/s-asc6issn7h/images/stencil/1280x1280/products/6962/9633/410280__16807.1668097537.jpg?c=1",
        category: "food"
    },
    {
        id: 32,
        name: "Thức ăn Royal Canin cho mèo",
        price: "450.000 VNĐ",
        image: "https://image.chewy.com/is/image/catalog/146000_MAIN._AC_SL600_V1627065221_.jpg",
        category: "food"
    },
    {
        id: 33,
        name: "Thức ăn Whiskas cho mèo",
        price: "250.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/819KJO-TV0L._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 34,
        name: "Thức ăn Pedigree cho chó",
        price: "300.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/81MXUN1VqPL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 35,
        name: "Thức ăn khô Purina ONE cho mèo",
        price: "350.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71lOI+b2wLL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 36,
        name: "Thức ăn Naturea cho chó",
        price: "650.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71O-tqgch6L._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 37,
        name: "Pate Sheba cho mèo",
        price: "220.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/91bYsX4TD7L._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 38,
        name: "Thức ăn cá hồi Blue Buffalo cho mèo",
        price: "520.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71+l4h8FsxL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 39,
        name: "Thức ăn hữu cơ cho chó nhỏ",
        price: "580.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/81aZVc55GPL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 40,
        name: "Thức ăn Hill's Science cho mèo già",
        price: "480.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/813XvbyJ2dL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 41,
        name: "Snack hình xương cho chó",
        price: "150.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/81lFziVzSpL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 42,
        name: "Bánh thưởng cho mèo vị cá ngừ",
        price: "120.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71Ol+gQuc1L._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 43,
        name: "Sữa cho chó con",
        price: "280.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61jYjtnY4+L._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 44,
        name: "Thức ăn ướt IAMS cho chó",
        price: "320.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/81zTSKvkDcL._AC_SL1500_.jpg",
        category: "food"
    },
    {
        id: 45,
        name: "Thức ăn Purina Pro Plan cho chó vận động",
        price: "550.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/81N4A4ClCDL._AC_SL1500_.jpg",
        category: "food"
    },
    
    // ACCESSORIES CATEGORY - 15 items
    {
        id: 46,
        name: "Nhà gỗ cho chó",
        price: "1.200.000 VNĐ",
        image: "https://media.istockphoto.com/id/1371408111/photo/empty-brown-wooden-dog-house-in-the-grass.jpg?s=612x612&w=0&k=20&c=P047Vj18X6Q54n7L4rU0Q56S6oEwzJz-y1N1Jg-h4g4=",
        category: "accessories"
    },
    {
        id: 47,
        name: "Vòng cổ cho chó",
        price: "150.000 VNĐ",
        image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "accessories"
    },
    {
        id: 48,
        name: "Bát ăn đôi cho thú cưng",
        price: "200.000 VNĐ",
        image: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
        category: "accessories"
    },
    {
        id: 49,
        name: "Nhà cây cho mèo",
        price: "1.800.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71cPZYlr9GL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 50,
        name: "Túi vận chuyển thú cưng",
        price: "450.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71a5rOoP3sL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 51,
        name: "Đồ chơi chuột giả cho mèo",
        price: "60.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71pP+YAViBL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 52,
        name: "Lược chải lông cho chó mèo",
        price: "120.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61l0UlJpUJL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 53,
        name: "Nệm cho thú cưng",
        price: "350.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/A1sG9SbXXHL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 54,
        name: "Dây dắt chó có đèn LED",
        price: "180.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/71QzpkfuORL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 55,
        name: "Cát vệ sinh cho mèo",
        price: "200.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/81rhMzMetuL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 56,
        name: "Khay vệ sinh mèo tự động",
        price: "1.500.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61rFPSy+EjL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 57,
        name: "Quần áo cho chó nhỏ",
        price: "250.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61s5KfQf+3L._AC_SL1050_.jpg",
        category: "accessories"
    },
    {
        id: 58,
        name: "Máy uống nước tự động cho thú cưng",
        price: "420.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61pQQq0pv2L._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 59,
        name: "Túi ngủ cho mèo",
        price: "280.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61kRgFef-yL._AC_SL1500_.jpg",
        category: "accessories"
    },
    {
        id: 60,
        name: "Balo vận chuyển mèo",
        price: "520.000 VNĐ",
        image: "https://m.media-amazon.com/images/I/61WhbVDFuvL._AC_SL1000_.jpg",
        category: "accessories"
    }
];

function loadFeaturedProducts() {
    const container = document.getElementById('featured-products-container');
    if (!container) return;

    let productsHTML = '';
    featuredProducts.forEach(product => {
        productsHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="product-detail.html?id=${product.id}" class="btn-small">Xem chi tiết</a>
            </div>
        `;
    });
    container.innerHTML = productsHTML;
}

// Placeholder Testimonials
const testimonials = [
    {
        quote: "Tôi rất hài lòng với chú chó Corgi mua từ PetShop. Bé rất khỏe mạnh và lanh lợi.",
        author: "Anh Tuấn - Hà Nội"
    },
    {
        quote: "Dịch vụ giao hàng nhanh chóng, thức ăn cho mèo luôn đảm bảo chất lượng.",
        author: "Chị Lan - TP. HCM"
    },
    {
        quote: "Nhân viên tư vấn rất nhiệt tình, giúp tôi chọn được phụ kiện phù hợp cho bé Poodle nhà mình.",
        author: "Bạn Minh - Đà Nẵng"
    }
];

function loadTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container) return;

    // Basic display - replace with a proper slider later if needed
    let testimonialsHTML = '';
    testimonials.forEach(testimonial => {
        testimonialsHTML += `
            <div class="testimonial-card">
                <p>"${testimonial.quote}"</p>
                <h4>- ${testimonial.author}</h4>
            </div>
        `;
    });
    container.innerHTML = testimonialsHTML;
    // Add slider logic here if needed
}

function handleNewsletterSignup() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email) {
            // Simulate signup
            console.log(`Email submitted: ${email}`);
            alert("Cảm ơn bạn đã đăng ký nhận tin!");
            emailInput.value = ''; // Clear input
        } else {
            alert("Vui lòng nhập địa chỉ email hợp lệ.");
        }
    });
}

// Display Products
function displayProducts() {
    const productContainer = document.querySelector('.products-container');
    productContainer.innerHTML = '';
    
    // Get the active category filter
    const activeFilter = document.querySelector('.filter-btn.active');
    const category = activeFilter ? activeFilter.dataset.category : 'all';
    
    // Filter products based on the selected category
    const filteredProducts = category === 'all' 
        ? featuredProducts 
        : featuredProducts.filter(product => product.category === category);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
        `;
        
        productContainer.appendChild(productCard);
    });
    
    // Add event listeners to the newly created add-to-cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add filter functionality 
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Display filtered products
            displayProducts();
        });
    });
}

// Initialize the page
function initializePage() {
    displayProducts();
    setupFilters();
}

// Call initializePage when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Add more JS functions as needed (e.g., cart functionality, product filtering) 