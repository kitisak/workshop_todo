*** Settings ***
Library  SeleniumLibrary
Test Teardown  Close Browser

*** Variables ***


*** Testcases ***
Test อักขระพิเศษ
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  @%&*()?&!
  กดปุ่มเพิ่ม
  AlertMSG
  ไม่มีไอเทมเพิ่ม  @%&*()?&!

Test ความยาวเกิน 20
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  123456789012345678901
  กดปุ่มเพิ่ม
  AlertMSG
  ไม่มีไอเทมเพิ่ม  123456789012345678901

*** Keywords ***
เข้าไปยังหน้า index.html
  Open Browser  https://malee.democnc.com/en
  ...  browser=Chrome
  Maximize Browser Window
  Click Element  xpath://div[1]/div[2]/div[2]/div/div/div[6]/a

กรอกข้อมูล 
  [Arguments]  ${name}
  Input Text  id:todoName  ${name}

กดปุ่มเพิ่ม
  Click Element  xpath:

AlertMSG
  Alert Should Be Present  something went wrong
  
ไม่มีไอเทมเพิ่ม
  [Arguments]  ${name}
  Wait Until Element Does Not Contain  xpath://*[@class="page-content"]/div[3]  ${name}