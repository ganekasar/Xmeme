import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    Button,
    Card, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle ,
    CardHeader,
    CardFooter
} from 'reactstrap';
import { TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem, updateItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import UpdateModal from '../components/updateModal'
import moment from 'moment';

class List extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    onUpdateClick = id => {
        this.props.updateItem(id);
    }

    render () {
        const { items } = this.props.item;;
        return (
            <Container fluid className="home-page">
                <ListGroup>
                    <TransitionGroup className="list">
                        {items.map(({ _id, name, link, caption, date }) => (
                            
                            <Card className="list-item">
                                <CardHeader className="item-name">
                                    <CardBody>
                                        <CardTitle tag="h5"><img src="actor.png" alt="actor" className="profile" />{name}</CardTitle>
                                    </CardBody>
                                </CardHeader>
                                
                                <CardBody>
                                    <img width="325px" src={link} alt="Meme" />
                                </CardBody>
                            
                                <CardBody>
                                    <CardText tag="h6">{caption}</CardText>
                                </CardBody>

                                <CardBody>
                                    <CardSubtitle tag="p">Created On : {moment(date).format('DD-MM-YYYY')}</CardSubtitle>
                                </CardBody>

                            
                                <CardFooter className="item-name">
                                    <CardBody>
                                        <Button
                                            className="remove-btn"
                                            outline color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >Delete</Button>

                                        <Button
                                            outline color="white"
                                            className="update-btn"
                                        ><UpdateModal name={name} link={link} caption={caption} _id={_id} /></Button>
                                        
                                    </CardBody>
                                </CardFooter>
                            
                            </Card>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

List.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem, updateItem })(List);