import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Task from '../components/others/task/Task'
import AddTask from '../components/others/task/AddTask'
import Subject from '../components/others/task/Subject'
import request from '../services/request'
import ModalAddTask from '../components/others/modals/modalAddTask'
import ModalShowTask from '../components/others/modals/modalShowTask'
import ModalUpdateTask from '../components/others/modals/modalUpdateTask'
import ModalAddSubject from '../components/others/modals/modalAddSubject'
import { Button } from 'antd'

function Home() {
  const [subjects, setSubjects] = useState([])
  const [open, setOpen] = useState(false)
  const [subjectId, setSubjectId] = useState(undefined)
  const [isOpenModalShowTask, setIsOpenModalShowTask] = useState(false)
  const [currentTask, setCurrentTask] = useState({})
  const [openModalUpdateTask, setOpenModalUpdateTask] = useState(false)
  const [isOpenModalNewSubject, setIsOpenModalNewSubject] = useState(false)

  const showModal = (subjectId) => {
    setOpen(true);
    setSubjectId(subjectId)
  };

  const showModalNewSubject = () => {
    setIsOpenModalNewSubject(true);
  };

  const showDetailTask = (task) => {
    setCurrentTask(task)
    setIsOpenModalShowTask(true)
  }

  const showModalUpdateTask = () => {
    setOpenModalUpdateTask(true)
  }

  const fetchSubjects = async() => {
    const response = await request('GET', '/subjects', {user_id: localStorage.getItem("userId")})
    setSubjects(response.data.subjects)
  }

  useEffect(() => {
    fetchSubjects()
  }, [])

  const renderTasks = function(subject_id){
    return subjects.find((subject) => subject.id === subject_id).ordered_tasks.map((task) => {
      return <Task onClick={() => showDetailTask(task)} data={task} />
    })
  }

  const renderSubject = function(){
    return subjects.map((subject) => {
      return (
        <Col sm={2}>
          <Subject data={subject} />
          <AddTask callback={() => showModal(subject.id)}/>
          {renderTasks(subject.id)}
        </Col>
      )
    })
  }

  return (
    <Container>
      <Row>
        <div className='add-subject-wrapper'>
          <Button className="task-btn" type="primary" onClick={showModalNewSubject}>Add Subject</Button>
        </div>
        {renderSubject()}
      </Row>
      <ModalAddSubject callback={fetchSubjects} isOpen={isOpenModalNewSubject} setOpen={setIsOpenModalNewSubject} />
      <ModalAddTask callback={fetchSubjects} subjectId={subjectId} isOpen={open} setOpen={setOpen} />
      <ModalShowTask isOpen={isOpenModalShowTask} setOpen={setIsOpenModalShowTask} task={currentTask} callback={showModalUpdateTask} />
      <ModalUpdateTask callback={fetchSubjects} task={currentTask} isOpen={openModalUpdateTask} setOpen={setOpenModalUpdateTask} />
    </Container>
  );
}

export default Home;