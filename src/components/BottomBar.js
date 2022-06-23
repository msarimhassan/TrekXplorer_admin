import React from 'react'
import { Layout } from 'antd'

const{Footer}=Layout;
export default function BottomBar() {
  return (
      <>
          <Footer
              style={{
                  textAlign: 'center',
              }}
          >
              {/* Footer */}
              TrekXplorer ©2022 Created by Sarim,Rafay
          </Footer>
      </>
  );
}
