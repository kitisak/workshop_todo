*** Settings ***
Library  SeleniumLibrary
Library  RequestsLibrary
Test Teardown  Close Browser

*** Variables ***


*** Testcases ***
Test อักขระพิเศษ
  Delete All Item
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  @%&*()?&!
  กดปุ่มเพิ่ม
  AlertMSG
  ไม่มีไอเทมเพิ่ม  @%&*()?&!

Test ความยาวเกิน 20
  Delete All Item
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  123456789012345678901
  กดปุ่มเพิ่ม
  AlertMSG
  ไม่มีไอเทมเพิ่ม  123456789012345678901

*** Keywords ***
เข้าไปยังหน้า index.html
  Open Browser  http://workshop.democnc.com
  ...  browser=Chrome
  Maximize Browser Window

กรอกข้อมูล 
  [Arguments]  ${name}
  Input Text  id:todoName  ${name}

กดปุ่มเพิ่ม
  Click Element  xpath:

AlertMSG
  Alert Should Be Present  something went wrong
  
ไม่มีไอเทมเพิ่ม
  Wait Until Page Does Not Contain  xpath://*[@id="todoList"]/div[1]/div/div

Delete All Item
  Create Session  api  http://workshopapi.democnc.com
  ${resp}=  Delete Request  api  /api/todo
  Should be equal  ${resp.status_code}  ${200}