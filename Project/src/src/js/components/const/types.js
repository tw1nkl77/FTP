export const PRODUCTS_API = 'https://raw.githubusercontent.com/SergioElCringe/JS_step_1/main/TEST_FTP/static/products';
export const menuApi = 'https://raw.githack.com/SergioElCringe/JS_step_1/main/BASE__PROJECT';

export default {
    catalog: {
        getTemplate(item) {
            const { imgUrl, name, price, prevPrice, category, id } = item;

            return `<div class="product">
                <div class="product_image">
                    <img src="${PRODUCTS_API + imgUrl}" alt="">
                    <div 
                        class="btn-add"
                        data-imgurl="${imgUrl}"
                        data-name="${name}"
                        data-price="${price}"
                        data-id="${id}"
                    >Add this product</div>
                </div>
                ${this.getCategory(category)}
                <div class="product_content">
                    <div class="product_title"><a href="product.html">${name}</a></div>
                    ${this.getPrice(category, prevPrice, price)}
                </div>
            </div>`;
        },

        checkCategory(categoryId) {
            let className, text;

            switch (categoryId) {
                case 1:
                    {
                        className = 'product_new';
                        text = 'New';
                        break;
                    };

                case 2:
                    {
                        className = 'product_hot';
                        text = 'Hot';
                        break;
                    };

                default:
                    {
                        className = 'product_sale';
                        text = 'Sale';
                    };
            };

            return { className, text };
        },

        getCategory(categoryId) {
            const category = categoryId ? this.checkCategory(categoryId) : null;

            return category ? `
            <div class="product_extra ${category.className}">
                <a href="categories.html">${category.text}</a>
            </div>` : '';
        },

        getPrice(categoryid, prevPrice, price) {
            return categoryid === 2 ? `<div class="product_price sale"><s><span class="old-price">$${prevPrice}</span></s><span class="new-price">$${price}</span></div>` : `<div class="product_price">$${price}</div>`;
        }
    },

    menu: {
        getTemplate(item) {
            const { url, name, subCategories } = item;
            let hassubs = '';

            if (subCategories) {
                hassubs = 'class="hassubs"';
            };

            return `
            <li ${hassubs}>
                <a href="${url}">${name}</a>
                ${this.checkSubCategories(subCategories)}
            </li>`;
        },

        getTemplateSub(item) {
            const { url, name } = item;
            return `<li><a href="${url}">${name}</a></li>`;
        },

        checkSubCategories(categories) {
            const sub = categories ? categories : null;
            let subAccum = '';

            if (sub) {
                sub.forEach(itemSub => subAccum += this.getTemplateSub(itemSub));
            };

            return sub ? `<ul>${subAccum}</ul>` : '';
        }
    },

    cart: {
        getTemplate(item) {
            const { id, imgUrl, name, price } = item;

            return `
            <div class="cart_item d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start" data-id=${id}>
                <div class="cart_item_product d-flex flex-row align-items-center justify-content-start">
                    <div class="cart_item_image">
                        <div>
                            <img src="${PRODUCTS_API + imgUrl}">
                        </div>
                    </div>
                    <div class="cart_item_name_container">
                        <div class="cart_item_name">
                            <a href="#">${name}</a>
                        </div>
                        <div class="cart_item_edit">
                            <a href="#">Edit Product</a>
                        </div>
                    </div>
                </div>
                <div class="cart_item_price">$${price}</div>
                <div class="cart_item_quantity">
                    <div class="product_quantity_container">
                        <div class="product_quantity clearfix">
                            <span>Qty</span>
                            <input id="quantity_input" type="text" pattern="[0-9]*" value="1">
                            <div class="quantity_buttons">
                                <div id="quantity_inc_button" class="quantity_inc quantity_control"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>
                                <div id="quantity_dec_button" class="quantity_dec quantity_control"><i class="fa fa-chevron-down" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_item_total"></div>
            </div>`
        }
    }
};