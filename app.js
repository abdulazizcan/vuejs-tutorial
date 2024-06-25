Vue.component('product', {
    template: `
        <div class="product">
          <div class="product-image">
            <img v-bind:src="image" alt="">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if='Stock > 10'>In Stock</p>
            <p v-else-if='Stock <= 10 && Stock > 0'>Almost sold out</p>
            <p v-else :class="{outOfStock: Stock === 0}">Out of Stock</p>
            <p v-if="Sale">On Sale</p>
  
  <ul>
              <li v-for='detail in details'>{{ detail }}</li>
            </ul>
            <div v-for='(variant, index) in variants' 
                 :key='variant.variantId'
                 class='color-box'
                 :style='{backgroundColor: variant.variantColor}'
                 @mouseover='updateProductInfo(index)'>
            </div>
            <button v-on:click='addToCart' :disabled='Stock === 0' 
                    :class='{ disabledButton: Stock === 0 }'> Add to Cart </button>
            <div class="cart">
              <p> Cart: {{ cart }}</p>
            </div>
            <p v-on:click='clearTheCart'>Clear the cart</p>
          </div>
        </div>
  `,
    data() {
      return {
        product: 'socks',
        description: 'hello there how are you',
        selectedVariant: 0,
        details: ['%100 cotton', 'outfit', 'unisex'],
        variants: [{
            variantId: 2234,
            variantColor: 'blue',
            variantImage: 'https://cdn.shopify.com/s/files/1/0510/7809/files/MAP-MAS315_SWCRN.MAAP_20x_20Bleach_20Socks_Sweet_20Corn_PDP_HERO_01_DESKTOP.jpg?v=1700172105',
            variantQuantity: 0,
            onSale: true
  
          },
          {
            variantId: 2235,
            variantColor: 'red',
            variantImage: 'https://cdn.shopify.com/s/files/1/2180/3833/products/MAP-MAS207_FLM_TempoSock_Flame_PDP_HERO_01_DESKTOP.jpg?v=1668055063',
            variantQuantity: 10,
            onSale: false
  
  
          }
        ],
        cart: 0,
        brand: 'Vue'
  
      }
    },
  
    methods: {
      addToCart: function() {
        this.cart += 1
        this.inventory -= 1;
  
      },
      updateProductInfo: function(index) {
        this.selectedVariant = index
      },
      clearTheCart: function() {
        this.cart = 0
      }
    },
    computed: {
      title() {
        return this.product + ' - ' + this.brand
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      },
      Stock() {
        return this.variants[this.selectedVariant].variantQuantity
  
      },
      Sale() {
        return this.variants[this.selectedVariant].onSale
      }
    }
  
  })
  
  
  var app = new Vue({
  
    el: '#app',
  
  })
  