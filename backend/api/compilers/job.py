from os import kill, remove
from os.path import exists
from signal import SIGTERM
from typing import Any, Dict, Optional, Union
from uuid import UUID, uuid4

from pydantic import BaseModel, Field


class Job:
    # uid: UUID = Field(default_factory=uuid4)
    # pid: int = 0
    # status: str = "in_progress"
    def __init__(self) -> None:
        self.result: int = 0
        self.user: str = ""

    def start(self, pid: int):
        with open("job", "w", encoding="utf-8") as f:
            f.write(str(pid))

    def check(self):
        if exists("job"):
            pid = open("job", "r", encoding="utf-8").readline()
            if self.check_pid(int(pid)) or self.result is not None:
                return pid
            else:
                self.finish()
                return False
        else:
            return False

    def finish(self):
        self.result = None
        try:
            remove("job")
        except Exception:  # nosec B110
            pass

    def kill(self):
        pid = self.check()
        if pid:
            kill(int(pid), SIGTERM)  # or signal.SIGKILL

    def check_pid(self, pid):
        try:
            kill(pid, 0)
        except OSError:
            return False
        else:
            return True
