module.exports = (sequelize, DataTypes) => {
  return sequelize.define('student', {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      cutoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50), // 定义类型(长度)
      allowNull: false // 是否允许为 NULL
    },
    number: {
      type: DataTypes.INTEGER(5), // 定义类型(长度)
      allowNull: false, // 是否允许为 NULL
      unique: true // 是否是唯一的
    },
    age: {
      type: DataTypes.INTEGER(3), // 定义类型(长度)
      allowNull: false, // 是否允许为 NULL
      default: 1 // 默认值
    }, 
    class: {
      type: DataTypes.INTEGER(3), // 定义类型(长度)
      allowNull: false, // 是否允许为 NULL
      default: 1 // 默认值   
    }
})
}