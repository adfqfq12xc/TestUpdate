class Node :
    def __init__(self,state,parent ,action) :
        self.state=state
        self.parent=parent
        self.action=action

class stack:
    def __init__(self):
        self.data=[]
    
    def add(self,node):
        self.data.append(node)
    
    

