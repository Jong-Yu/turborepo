@echo off
  setlocal
    for /d /r %%G in (*dramas) do (
        echo %%G
        cd %%G
    )
    pause

  endlocal