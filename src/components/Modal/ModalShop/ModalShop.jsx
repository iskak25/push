import React from 'react'
import modalShopStyle from './ModalShop.module.scss'
import shop1 from '../../../assest/img/shop1.jpg'
import shop_car from '../../../assest/img/shop_car.svg'
import shop_lacaition from '../../../assest/img/shop_lacaition_Icon.svg'

const ModalShop = ({ activ, setActiv }) => {
  return (
    <>
      <div
        className={activ ? modalShopStyle.modal_activ : modalShopStyle.modal}
        onClick={() => setActiv(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            activ
              ? modalShopStyle.modal_content_activ
              : modalShopStyle.modal_content
          }
        >
          <div className={modalShopStyle.item_img}>
            <img
              className={modalShopStyle.item_img__img}
              src={shop1}
              alt="shop1"
            />
            <h3 className={modalShopStyle.item_img__p}>Толстовка Весна</h3>
          </div>
          <div className={modalShopStyle.item_text}>
            <div className={modalShopStyle.text_heder}>
              <h3 className={modalShopStyle.text_heder_h3}>Цена</h3>
              <h3 className={modalShopStyle.text_heder_h3}>2990 сом</h3>
            </div>
            <p className={modalShopStyle.text_center}>Характеристики</p>
            <div className={modalShopStyle.text_heder}>
              <p className={modalShopStyle.text_heder_p}>Производство:</p>
              <p className={modalShopStyle.text_heder_p}>400 cm</p>
            </div>
            <div className={modalShopStyle.text_heder}>
              <p className={modalShopStyle.text_heder_p}>Цвет:</p>
              <p className={modalShopStyle.text_heder_p}>150 cm</p>
            </div>
            <div className={modalShopStyle.text_heder}>
              <p className={modalShopStyle.text_heder_p}>Размер:</p>
              <p className={modalShopStyle.text_heder_p}>70 cm</p>
            </div>
            <div className={modalShopStyle.border}>
              <img
                className={modalShopStyle.border_img}
                src={shop_lacaition}
                alt=""
              />
              <p className={modalShopStyle.border_p}>Bishkek - 720075</p>
            </div>
            <div className={modalShopStyle.border}>
              <img
                className={modalShopStyle.border_img}
                src={shop_car}
                alt=""
              />
              <p className={modalShopStyle.border_p}>
                Delivery Between 1 week - 2 week
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalShop
