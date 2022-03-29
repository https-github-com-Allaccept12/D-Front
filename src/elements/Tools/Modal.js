import React from 'react';
import { KAKAO_AUTH_URL } from "../../shared/OAuth";
import './modal.css';
import kakao from  '../../static/icons/kakao_login_medium_wide.png'

export const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
  
    return (
      // 모달이 열릴때 openModal 클래스가 생성된다.
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            {/* <main>{props.children}</main> */}
            <main className="flex justify-center"><a href={KAKAO_AUTH_URL}><img src={kakao}/></a></main>
            {/* <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer> */}
          </section>
        ) : null}
      </div>
    );
  };