import multiprocessing as mp

class Queue:
    def __init__(self):
        self.q = None

    def get_queue(self):
        if self.q == None:
            m = mp.Manager()
            self.q = m.Queue()
            return self.q
        else:
            return self.q

message_queue = Queue()