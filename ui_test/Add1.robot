*** Settings ***
Library  SeleniumLibrary
Test Teardown  Close Browser

*** Variables ***


*** Testcases ***
Add ซื้อข้าว
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  just a test items
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  just a test items

Add sleep
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  sleep
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  sleep


Add 19 length
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  A234567890123456789
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  A234567890123456789

Add 20 length
  เข้าไปยังหน้า index.html
  กรอกข้อมูล  A2345678901234567890
  กดปุ่มเพิ่ม
  มีไอเทมเพิ่ม  A2345678901234567890

*** Keywords ***
เข้าไปยังหน้า index.html
  Open Browser  http://workshop.democnc.com
  ...  browser=Chrome
  Maximize Browser Window

กรอกข้อมูล 
  [Arguments]  ${name}
  Input Text  id:todoName  ${name}

กดปุ่มเพิ่ม
  Click Element  id:btnAdd

มีไอเทมเพิ่ม
  [Arguments]  ${name}
  Wait Until Element Contains  xpath:////*[@id="todoList"]/div[1]/div/div/div[1]/label/input  ${name}