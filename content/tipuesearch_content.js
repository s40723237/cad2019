var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'week1~wee9', 'text': 'week1 中秋連假 \n week2 \n 1. 在github裡面創一倉儲，名子命名為cad2019並將lnitiulize this repository with a README打勾。 \n 2. 下載本課程的可攜套件 (2019full可攜套件下載本課程的可攜套件 (2019full可攜套件.7z)，因本檔案大於5G須先把隨身碟格式化成NTFS。 \n 3. 打開start mdecourse.bat -> cd到tmp資料夾\xa0 ->git clone 下載自己的倉儲 ( 因原先tmp 已有一個 cad2019，因此我改名子成 aaa ) \xa0 ，如果在學校要記得把proxy位置改成［2001；288；6004；17；；17］port = 3128，在家則在前方打上#關閉此設定。 \n 4. 這學期的近端指吝有所更動需用 git submodule add  http://github.com/mdecourse/cmsimde.git \xa0cmsimde的指令下載更新。 \n 5. 打開資料夾\xa0 -> 進入cmsimde\xa0-> 進入up_dir\xa0-> 用 Ctrl+A 打檔案全選在\xa0Ctrl+C 複製\xa0 ->回到資料夾貼上。 \n 6. 先進入\xa0cd cmsimde\xa0\xa0 -> 再開啟近端動態 python wsgi.py。 \n 7. 打開瀏覽器輸入 httpa://127.0.0.1:9443/ 進入近端\xa0\xa0 -> 輸入密碼 admin 然後login 開始修改。 \n 影片請開 youtube\xa0 C C\xa0 字幕\xa0 \n \n \n week3 \n 1. 進入Y曹 /進入 portablegit /進入 bin\xa0 的 sh.exe 改成 sh_rename_for_solvespace.exe。 \n \n \n 2. 到tmp底下git clone下載 --recurse-submodules  \n https://github.com/solvespace/solvespace.git 。 \n \n \n 3. 進入tmp底下的 solvespace 進入 extlib 進入 angle 進入 CMakeLists.txt。 \n \n \n 4 . 將 CMakeLists.txt 中的第713 and 714行前面加上#來關閉。 \n \n \n 5.\xa0 cd solvespace\xa0\xa0 -> \xa0  cd extlib\xa0\xa0 -> \xa0  cd libpng\xa0 \xa0輸入指令\xa0 mkdir build  \xa0\xa0 -> \xa0 \xa0在 cd build。 \n \n \n 6.\xa0 輸入指令cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release ，再輸入指令 mingw32-make 。 \n \n \n 7.\xa0\xa0 把 libpng.dll.a 改名為 libpng_static.a 並放到 Y:/msys64\\mingw64\\lib。 \n \n \n 8. 輸入指令 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release\xa0 ，再輸入指令mingw32-make。 \n \n \n 影片請開 youtube\xa0 C C\xa0 字幕 \n \n \n \n \n \n week4 \n 完成 week2 和 week3 \n week5 \n week6 \n week7 \n week8 \n week9', 'tags': '', 'url': 'week1~wee9.html'}]};